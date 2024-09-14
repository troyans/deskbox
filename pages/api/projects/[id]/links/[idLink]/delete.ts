import prisma from "@/lib/prismaClient";
import { checkAuth } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "DELETE") {
    await checkAuth(req, res);
    try {
      const id = Array.isArray(req.query.idLink)
        ? req.query.idLink[0]
        : req.query.idLink;

      const projectLinkDelete = await prisma.links.delete({
        where: { id: id },
      });
      res.status(200).json(projectLinkDelete);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
