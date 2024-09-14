import prisma from "@/lib/prismaClient";
import { checkAuth } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "DELETE") {
    await checkAuth(req, res);
    try {
      const id = Array.isArray(req.query.idFile)
        ? req.query.idFile[0]
        : req.query.idFile;

      const projectFileDelete = await prisma.documents.delete({
        where: { id: id },
      });
      res.status(200).json(projectFileDelete);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
