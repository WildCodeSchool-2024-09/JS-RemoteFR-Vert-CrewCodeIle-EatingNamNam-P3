import type { RequestHandler } from "express";

import roleRepository from "./roleRepository";

const addRole: RequestHandler = async (req, res, next) => {
  try {
    const newRole = {
      label: req.body.label,
    };

    const newRoleId = await roleRepository.create(newRole);

    res.sendStatus(201).json({
      message: "role créé",
      id: newRoleId,
    });
  } catch (error) {
    next(error);
  }
};

export default { addRole };
