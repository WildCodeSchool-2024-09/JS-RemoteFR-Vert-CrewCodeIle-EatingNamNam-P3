import argon2 from "argon2";
import type { RequestHandler } from "express";

export const passwordHashing = async (password: string) => {
  const hashing = await argon2.hash(password);

  return hashing;
};

export const hashPassword: RequestHandler = async (req, res, next) => {
  const { password } = req.body;

  const hashedPassword = await passwordHashing(password);

  if (hashedPassword) {
    req.body.password = hashedPassword;
    next();
  }
};
