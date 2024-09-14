import prisma from "@/lib/prismaClient";
import { checkAuth } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "DELETE") {
    await checkAuth(req, res);
    try {
      const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

      const projectDelete = await prisma.projects.delete({
        where: { id: id },
      });
      res.status(200).json(projectDelete);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
