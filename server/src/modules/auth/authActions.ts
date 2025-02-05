import type { RequestHandler } from "express";

import type { UserType } from "../../lib/definitions";

import jwt from "jsonwebtoken";

type PayloadType = {
  username: string;
};

const tokenGeneration = async (payload: PayloadType) => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};

const login: RequestHandler = async (req, res, next) => {
  try {
    const { username } = req.body;
    const payloadObject = { username };

    const token = await tokenGeneration(payloadObject);

    res
      .status(200)
      .cookie("auth_token", token, {
        secure: false,
        httpOnly: true,
        maxAge: 360000,
      })
      .json({
        message: "utilisateur connecté",
      });

    return;
  } catch (err) {
    next(err);
  }
};

export default { login };
