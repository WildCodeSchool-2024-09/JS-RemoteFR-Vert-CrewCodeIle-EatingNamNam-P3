import type { RequestHandler } from "express";
import recipeIngredientRepository from "./recipeIngredientRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const recipe_ingredient = req.body.recipe_ingredient;

    if (recipe_ingredient) {
      for (const currentingredient of recipe_ingredient) {
        const recipeIngredientDB = {
          ...currentingredient,
          recipe_id: req.body.recipeId,
        };
        await recipeIngredientRepository.create(recipeIngredientDB);
      }
    }

    res.status(201);
  } catch (err) {
    next(err);
  }
};

export default { add };
