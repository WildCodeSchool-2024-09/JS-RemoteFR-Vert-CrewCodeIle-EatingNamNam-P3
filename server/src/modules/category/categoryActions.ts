import type { RequestHandler } from "express";

import categoryRepository from "./categoryRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCategory = {
      label: req.body.label,
    };

    const insertId = await categoryRepository.create(newCategory);

    res.status(201).json({
      message: "Nouvelle catégorie",
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
