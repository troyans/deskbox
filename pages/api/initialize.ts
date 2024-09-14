import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    try {
      const body = req.body;

      res.send({
        canvas: {
          content: {
            components: [
              {
                type: "button",
                label: "Click ME!!!!",
                style: "primary",
                id: "url_button",
                action: { type: "submit" },
              },
            ],
          },
        },
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
