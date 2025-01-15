import ingredientRepository from "./ingredientRepository";

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const ingredient = await ingredientRepository.readAll();

    res.json(ingredient);
  } catch (err) {
    next(err);
  }
};

export default { browse };
