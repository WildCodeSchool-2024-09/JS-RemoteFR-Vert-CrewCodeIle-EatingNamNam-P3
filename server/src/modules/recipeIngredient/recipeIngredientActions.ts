import type { RequestHandler } from "express";
import recipeIngredientRepository from "./recipeIngredientRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newRecipeIngredient = {
      quantity: req.body.quantity,
      recipe_id: req.body.recipe_id,
      ingredient_id: req.body.ingredient_id,
    };
    const insertId =
      await recipeIngredientRepository.create(newRecipeIngredient);
    res.status(201).json({
      message: "Nouvel ingrédient ajouter",
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
