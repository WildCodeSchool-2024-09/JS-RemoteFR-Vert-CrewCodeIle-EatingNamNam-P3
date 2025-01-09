import type { RequestHandler } from "express";

import recipeRepository from "./recipeRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recipeRepository.readAll();
  } catch (error) {
    next(error);
  }
};

export default { browse };
