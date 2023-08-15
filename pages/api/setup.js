import prisma from "lib/prisma";
import { getSession } from "next-auth/react";

// updating the user details in db

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) return res.end();

  if (req.method === "POST") {
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: req.body.name,
      },
    });

    res.end();
  }
}
