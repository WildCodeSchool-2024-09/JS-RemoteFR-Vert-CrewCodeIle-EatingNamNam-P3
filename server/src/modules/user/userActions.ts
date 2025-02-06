import type { RequestHandler } from "express";

import type { UserType } from "../../lib/definitions";

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

const readPasswordByUserName: RequestHandler = async (req, res, next) => {
  try {
    const userFromDB: UserType | null = await userRepository.readUserName(
      req.body.username,
    );
    if (!userFromDB) {
      return;
    }

    req.body.passwordFromDB = userFromDB.password_hash;

    next();
  } catch (err) {
    next(err);
  }
};

const readById: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const userDataFromDb = await userRepository.readById(userId);

    if (userDataFromDb == null) {
      res.sendStatus(404);
    } else {
      res.json(userDataFromDb);
    }
  } catch (err) {
    next(err);
  }
};

const readByUserName: RequestHandler = async (req, res, next) => {
  try {
    const userNameFromDB: UserType[] = await userRepository.readAll();
    if (req.query.q) {
      const filteredUserName = userNameFromDB.filter((element) =>
        element.username.toLowerCase().includes(req.query.q as string),
      );
      res.json(filteredUserName);
    } else {
      res.json(userNameFromDB);
    }
  } catch (err) {
    next(err);
  }
};

export default { add, readPasswordByUserName, readByUserName, readById };
