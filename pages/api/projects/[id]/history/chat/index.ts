import prisma from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    try {
      const id = Array.isArray(req.query.idConversation)
        ? req.query.idConversation[0]
        : req.query.idConversation;
      const idProject = Array.isArray(req.query.id)
        ? req.query.id[0]
        : req.query.id;

      const chats = await prisma.messages.findMany({
        where: {
          conversationId: id,
          conversation: {
            projectId: idProject,
          },
        },
      });

      res.status(200).json(chats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
