import prisma from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    try {
      const conversation = await prisma.conversations.create({
        data: {
          ...req.body,
          projectId: Array.isArray(req.query.id)
            ? req.query.id[0]
            : req.query.id,
        },
      });

      res.status(201).json(conversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
