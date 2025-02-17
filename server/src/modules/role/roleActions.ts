import type { RequestHandler } from "express";

import roleRepository from "./roleRepository";

const addRole: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await roleRepository.create(req.body);

    res.status(201).json({
      id: insertId,
      message: "Nouveau rôle créé",
    });
  } catch (error) {
    next(error);
  }
};

export default { addRole };
