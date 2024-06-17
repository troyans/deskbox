import prisma from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    try {
      const projectFileIndex = await prisma.documents.findMany({
        where: {
          projectId: Array.isArray(req.query.id)
            ? req.query.id[0]
            : req.query.id,
        },
      });
      res.status(200).json(projectFileIndex);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
