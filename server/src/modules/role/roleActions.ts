import type { RequestHandler } from "express";

import roleRepository from "./roleRepository";

const addRole: RequestHandler = async (req, res, next) => {
  try {
    const { label } = req.body;

    const newRoleId = await roleRepository.create(label);

    res.sendStatus(201).json({
      id: newRoleId,
    });
  } catch (error) {
    next(error);
  }
};

export default { addRole };
