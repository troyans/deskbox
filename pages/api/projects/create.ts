import prisma from "@/lib/prismaClient";
import { checkAuth, exclude } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    await checkAuth(req, res);
    try {
      const token = await getToken({
        req: req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      const project = await prisma.projects.create({
        data: { ...req.body, ...{ userId: token.user.id } },
      });

      res.status(201).json(exclude(project, ["deletedAt"]));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
