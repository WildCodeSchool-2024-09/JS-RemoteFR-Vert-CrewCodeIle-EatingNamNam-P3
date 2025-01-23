import type { RequestHandler } from "express";

import dietTypeRepository from "./dietTypeRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newDietType = {
      label: req.body.label,
    };

    const insertId = await dietTypeRepository.create(newDietType);

    res.status(201).json({
      message: `Nouveau type "${req.body.label}" créé avec succès`,
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
