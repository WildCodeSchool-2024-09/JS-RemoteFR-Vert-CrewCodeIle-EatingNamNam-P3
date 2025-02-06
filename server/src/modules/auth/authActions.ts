import { verify } from "argon2";
import type { RequestHandler } from "express";

import jwt from "jsonwebtoken";

type PayloadType = {
  username: string;
};

const tokenGeneration = async (payload: PayloadType) => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};

const decodeToken = (token: string) => {
  return jwt.decode(token);
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
        maxAge: 3600000000000000,
      })
      .json({
        message: "utilisateur connecté",
      });

    return;
  } catch (err) {
    next(err);
  }
};

const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      res.status(403).json({ authentified: false });
    }

    const verifiedToken = jwt.verify(
      req.cookies.auth_token,
      process.env.APP_SECRET as string,
    );
    if (verifiedToken) {
      next();
    } else {
      res.json({ authentified: false });
      return;
    }
  } catch (err) {
    next(err);
  }
};

const authWall: RequestHandler = (req, res, next) => {
  const currentToken = req.cookies?.auth_token;

  if (currentToken) {
    next();
  } else {
    res.json({ authentified: false });
    return;
  }
};

export default { login, authWall, verifyToken, decodeToken };
