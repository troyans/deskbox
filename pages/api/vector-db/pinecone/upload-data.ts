import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocxLoader } from "langchain/document_loaders/fs/docx";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Pinecone } from "@pinecone-database/pinecone";
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { Formidable } from "formidable";
import { getToken } from "next-auth/jwt";

const maxFiles = 10; // Maximum number of files

export const maxDuration = 60;
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    try {
      const token = await getToken({
        req: req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      const data: {
        fields: unknown;
        files: unknown;
      } = await new Promise((resolve, reject) => {
        const form = new Formidable();

        form.parse(req, (err, fields, files) => {
          if (err) reject({ err });
          resolve({ fields, files });
        });
      });

      if (!data.files || Object.keys(data.files).length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }

      const pineconeClient = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY,
      });

      const indexName = process.env.VECTOR_DB_INDEX_NAME;

      for (let i = 0; i < Object.keys(data.files).length; i++) {
        const file = data.files[`file${i}`][0];
        const uploadId = data.fields[`uploadId${i}`][0];
        const filename = data.fields[`filename${i}`][0];

        const folder = `document/${token.user.id}/`;
        const storageRef = ref(storage, `${folder}${filename}`);
        await uploadBytes(storageRef, file);

        let loader;
        switch (file.mimetype) {
          case "application/pdf":
            loader = new PDFLoader(file.filepath);
            break;
          case "text/plain":
            loader = new TextLoader(file.filepath);
            break;
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            loader = new DocxLoader(file.filepath);
            break;
          case "text/csv":
            loader = new CSVLoader(file.filepath);
            break;
          case "application/json":
            loader = new JSONLoader(file.filepath);
            break;
          default:
            continue; // Skip unsupported file types
        }

        const docs = await loader.load();

        const textSplitter = new RecursiveCharacterTextSplitter({
          chunkSize: 500,
          chunkOverlap: 0,
        });
        const splitResult = await textSplitter.splitDocuments(docs);

        const embeddings = new OpenAIEmbeddings();
        const index = pineconeClient.Index(indexName);

        const documents = splitResult.map((doc) => {
          return new Document({
            metadata: {
              ...doc.metadata,
              uploadId: uploadId,
              filename: filename,
            },
            pageContent: doc.pageContent,
          });
        });

        await PineconeStore.fromDocuments(documents, embeddings, {
          pineconeIndex: index,
          textKey: "text",
        });

        fs.unlink(file.filepath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }

      res.status(201).json({ message: "Files processed successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
