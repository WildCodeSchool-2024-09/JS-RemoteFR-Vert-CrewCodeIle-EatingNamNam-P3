import type { RequestHandler } from "express";

import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password_hash: req.body.password_hash,
      avatar: req.body.avatar,
      birth_date: req.body.birth_date,
      localisation: req.body.localisation,
      profession: req.body.profession,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };

    const insertId: number = await userRepository.create(newUser);

    res.status(201).json({
      message: "Nouvelle User Youpi",
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
