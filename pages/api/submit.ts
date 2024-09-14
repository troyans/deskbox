import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    try {
      const body = req.body;

      res.send({
        canvas: {
          content: {
            components: [
              {
                type: "text",
                text: "Someone just clicked something AND you just created a new component!",
                style: "header",
                align: "center",
              },
            ],
          },
        },
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
