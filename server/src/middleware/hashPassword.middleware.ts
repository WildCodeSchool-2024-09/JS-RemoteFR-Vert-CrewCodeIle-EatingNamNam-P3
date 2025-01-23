import argon2 from "argon2";
import type { RequestHandler } from "express";

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
