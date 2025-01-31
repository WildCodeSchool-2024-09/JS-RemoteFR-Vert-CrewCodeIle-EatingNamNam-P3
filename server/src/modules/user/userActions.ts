import type { RequestHandler } from "express";

import type { UserLoginType } from "../../lib/definitions";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  const newUser = req.body;

  try {
    const insertId: number = await userRepository.create(newUser);

    res.status(201).json({
      message: `Bonjour ${req.body.username}`,
      id: insertId,
    });
  } catch (error) {
    next(error);
  }
};

const readByUserName: RequestHandler = async (req, res, next) => {
  try {
    const userFromDB: UserLoginType[] | null =
      await userRepository.readUserName(req.body.username);

    req.body.passwordFromDB = userFromDB[0].password_hash;

    next();
  } catch (err) {
    next(err);
  }
};

export default { add, readByUserName };
