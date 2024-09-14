import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { Pinecone } from "@pinecone-database/pinecone";
import { Document } from "@langchain/core/documents";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { v4 as uuidv4 } from "uuid";
import { checkAuth } from "@/lib/utils";

const { convert } = require("html-to-text");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    await checkAuth(req, res);
    try {
      const link = req.body.url;

      const options = {
        wordwrap: 130,
      };

      const uploadId = uuidv4();
      const entireDivText = await getEntirePageText(link, options);

      const metadata = { uploadId: uploadId, url: req.body.url };
      await uploadDocumentToPinecone(
        entireDivText,
        metadata,
        Array.isArray(req.query.id) ? req.query.id[0] : req.query.id
      );

      const data = {
        ...req.body,
        uploadId: uploadId,
        createdAt: new Date(),
        projectId: req.query.id,
      };

      const projectLink = await prisma.links.create({ data });

      res.status(201).json(projectLink);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};

const uploadDocumentToPinecone = async (
  pageContent: string,
  metadata: any,
  namespace: string
) => {
  const document = new Document({
    pageContent: pageContent,
    metadata: metadata,
  });

  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    // environment: process.env.PINECONE_ENVIRONMENT,
  });
  const pineconeIndex = pinecone.Index(process.env.VECTOR_DB_INDEX_NAME);

  await PineconeStore.fromDocuments([document], new OpenAIEmbeddings(), {
    pineconeIndex,
    textKey: "text",
    namespace,
  });

  console.log("Document uploaded to Pinecone successfully");
};

/**
 * Fetches the text content present in the entire page
 * @param pageUrl
 * @param options
 * @returns
 */
const getEntirePageText = async (pageUrl: string, options) => {
  const htmlContent = await getHtmlContent(pageUrl);
  const text = convert(htmlContent, options);

  return text;
};

const getHtmlContent = async (pageUrl: string) => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page open the website and wait until the dom content is loaded (HTML is ready)
  await page.goto(pageUrl, {
    waitUntil: "domcontentloaded",
  });

  const html = await page.content();

  // Close the browser
  await browser.close();
  return html;
};
