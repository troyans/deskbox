import prisma from "@/lib/prismaClient";
import { checkAuth } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    await checkAuth(req, res);
    try {
      const data = {
        ...req.body,
        createdAt: new Date(),
        projectId: req.query.id,
      };

      const projectFile = await prisma.documents.create({ data });
      res.status(201).json(projectFile);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
