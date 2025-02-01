import type { RequestHandler } from "express";

import type { UserType } from "../../lib/definitions";

import jwt from "jsonwebtoken";

const tokenGeneration = async (payload: UserType) => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "48h",
  });
};

const login: RequestHandler = async (req, res, next) => {
  const token = await tokenGeneration(req.body.username);

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
};

export default { login };
