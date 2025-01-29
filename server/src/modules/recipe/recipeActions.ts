import type { RequestHandler } from "express";

import recipeRepository from "./recipeRepository";

const browseMostRecent: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recipeRepository.readMostRecent();

    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newRecipe = {
      title: req.body.title,
      picture: req.body.picture,
      summary: req.body.summary,
      prep_time: Number.parseInt(req.body.prep_time),
      cook_time: Number.parseInt(req.body.cook_time),
      serving: Number.parseInt(req.body.serving),
      user_id: Number.parseInt(req.body.user_id),
    };

    const insertId = await recipeRepository.create(newRecipe);

    req.body.recipeId = insertId;

    res.status(201).json({
      message: `La recette "${req.body.title}" a été créée avec succès.`,
      id: insertId,
    });

    if (insertId) {
      next();
    }
  } catch (err) {
    next(err);
  }
};

export default { add, browseMostRecent };
