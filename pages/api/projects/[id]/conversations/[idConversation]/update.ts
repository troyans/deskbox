import prisma from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "PUT") {
    try {
      const id = Array.isArray(req.query.idConversation)
        ? req.query.idConversation[0]
        : req.query.idConversation;

      const conversationUpdate = await prisma.conversations.update({
        where: { id },
        data: req.body,
      });

      res.status(200).json(conversationUpdate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
