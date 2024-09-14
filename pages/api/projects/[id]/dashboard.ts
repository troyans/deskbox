import prisma from "@/lib/prismaClient";
import { checkAuth } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    await checkAuth(req, res);
    try {
      const file = await prisma.documents.count({
        where: {
          projectId: Array.isArray(req.query.id)
            ? req.query.id[0]
            : req.query.id,
        },
      });
      const link = await prisma.links.count({
        where: {
          projectId: Array.isArray(req.query.id)
            ? req.query.id[0]
            : req.query.id,
        },
      });
      const bot = await prisma.conversations.findMany({
        select: {
          _count: {
            select: {
              messages: { where: { speaker: "AI" } },
            },
          },
        },
        where: {
          projectId: Array.isArray(req.query.id)
            ? req.query.id[0]
            : req.query.id,
        },
      });
      const human = await prisma.conversations.findMany({
        select: {
          _count: {
            select: {
              messages: {
                where: { OR: [{ speaker: "ADMIN" }] },
              },
            },
          },
        },
        where: {
          projectId: Array.isArray(req.query.id)
            ? req.query.id[0]
            : req.query.id,
        },
      });
      const data = {
        files: file,
        urls: link,
        bots: bot.reduce((accumulator, currentValue) => {
          return accumulator + currentValue._count.messages;
        }, 0),
        humans: human.reduce((accumulator, currentValue) => {
          return accumulator + currentValue._count.messages;
        }, 0),
      };

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
