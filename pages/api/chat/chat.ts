import { Pinecone } from "@pinecone-database/pinecone";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { PineconeStore } from "langchain/vectorstores/pinecone";
import { AIMessage, HumanMessage } from "langchain/schema";
import makeChain from "@/lib/makeChain";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";

//const PINECONE_NAME_SPACE = "your_namespace"; // Replace with your namespace

export default async (req, res) => {
  const { question, history, appId, namespace } = req.body;

  if (!question) {
    return res.status(400).json({ message: "Question is required" });
  }

  const sanitizedQuestion = question.trim().replaceAll("\n", " ");

  try {
    const pineconeClient = new Pinecone({
      // environment: process.env.PINECONE_ENVIRONMENT,
      apiKey: process.env.PINECONE_API_KEY,
    });
    // await pineconeClient({
    //   environment: process.env.PINECONE_ENVIRONMENT,
    //   apiKey: process.env.PINECONE_API_KEY,
    // });

    const index = pineconeClient.Index(process.env.VECTOR_DB_INDEX_NAME);

    /* create vectorstore */
    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({}),
      {
        pineconeIndex: index,
        textKey: "text",
        namespace,
        //namespace: your_name_space,
      }
    );

    // create chain
    const chain = makeChain(vectorStore);

    const pastMessages = history.map((message, i) => {
      if (!(i === 0 && message.speaker === "AI")) {
        if (message.speaker === "USER") {
          return new HumanMessage(message.text);
        } else {
          return new AIMessage(message.text);
        }
      }
    });

    // Ask a question using chat history
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: pastMessages.filter(function (element) {
        return element !== undefined;
      }),
    });

    res.status(200).json(response);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};
