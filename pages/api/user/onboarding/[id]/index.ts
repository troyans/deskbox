import prisma from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    try {
      const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

      const onboardings = await prisma.onboardings.findMany({
        where: { userId: id },
      });
      res.status(200).json(onboardings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
