import { NextApiRequest, NextApiResponse } from "next";
import setupBrowser from "@/lib/setupBrowser";
import { checkAuth } from "@/lib/utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    await checkAuth(req, res);
    try {
      const link = req.body.url;

      const { browser, page } = await setupBrowser();

      await page.goto(link, { waitUntil: "networkidle2" });

      const articles = await page.evaluate(() => {
        const elements = Array.from(document.querySelectorAll("a"));
        return elements.map((element) => element.getAttribute("href"));
      });

      const parsedArticles = articles.filter(
        (x) =>
          !(
            x === "#" ||
            x === "/" ||
            x === null ||
            x === "" ||
            x === "javascript:void(0);"
          )
      );

      await browser.close();

      const result = [
        ...parsedArticles.reduce((set, item) => {
          set.add(item);
          return set;
        }, new Set()),
      ];

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
