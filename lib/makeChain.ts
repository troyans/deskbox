import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  RunnableSequence,
  RunnablePassthrough,
  RunnableLambda,
} from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";

const QA_TEMPLATE = `Context:
You are a helpful AI assistant. You help your customer find information about the context in which you have already trained.
You are very smart, and you know the meaning of the context despite the that sometimes customers have typos or different upper and lower case letters

Goal :
I want you to use the following pieces of context to answer the question at the end. give a little bit of emotion when answering questions from customer
Format your answer in HTML format with paragraphs and strong. Add a blank new line appropriately. Do not output markdown.
If you don't know the answer, just say you don't know politely. DO NOT try to make up an answer.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

{context}

Question: {question}
Helpful answer in markdown:`;

export default function makeChain(vectorstore: any) {
  const model = new ChatOpenAI({
    temperature: 0, // increase temepreature to get more creative answers
    modelName: "gpt-4o-mini", //change this to gpt-4 if you have access
  });

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", QA_TEMPLATE],
    ["human", "{question}"],
  ]);

  const retriever = vectorstore.asRetriever();

  const chain = RunnableSequence.from([
    RunnableLambda.from((input: any) => input.question),
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  return chain;
}
