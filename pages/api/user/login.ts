import { SHA256 as sha256 } from "crypto-js";
import prisma from "../../../lib/prismaClient";

export default async function handle(req, res) {
  if (req.method === "POST") {
    await loginUserHandler(req, res);
  } else {
    return res.status(405);
  }
}

async function loginUserHandler(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "invalid input" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        image: true,
      },
    });

    const project = await prisma.projects.findMany({
      where: { userId: user.id },
    });
    const onboarding = await prisma.onboardings.findMany({
      where: { userId: user.id },
    });

    if (user && user.password === hashPassword(password)) {
      return res.status(200).json({
        ...exclude(user, ["password"]),
        projects: project,
        isOnboard: onboarding.length > 0 ? true : false,
      });
    } else {
      return res.status(401).json({ message: "invalid credentials" });
    }
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

const hashPassword = (string) => {
  return sha256(string).toString();
};

function exclude(user, keys) {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}
