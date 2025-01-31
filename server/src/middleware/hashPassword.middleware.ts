import argon2 from "argon2";
import type { RequestHandler } from "express";
import userActions from "../modules/user/userActions";

export const passwordHashing = async (password: string) => {
  const hashing: string = await argon2.hash(password);

  return hashing;
};

export const hashPassword: RequestHandler = async (req, res, next) => {
  const { password_hash } = req.body;
  const hashedPassword: string = await passwordHashing(password_hash);

  if (hashedPassword) {
    req.body.password_hash = hashedPassword;
    next();
  }
};

const verifyPassword = async (
  passwordFromDB: string,
  passwordFromApp: string,
) => {
  return await argon2.verify(passwordFromDB, passwordFromApp);
};

export const passwordComparison: RequestHandler = async (req, res, next) => {
  try {
    const isValid = await verifyPassword(
      req.body.passwordFromDB,
      req.body.password,
    );

    if (!isValid) {
      res.status(403).json({
        message: "l'indentifiant ou le mot de passe est incorrect",
      });
      return;
    }

    console.info({ message: "tout va bien", value: req.body.password });

    res.json({ message: "super" });
  } catch (err) {
    next(err);
  }
};
