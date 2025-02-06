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

const readByTitle: RequestHandler = async (req, res, next) => {
  try {
    const recipeFromDB = await recipeRepository.readAll();
    if (req.query.q) {
      const filteredRecipe = recipeFromDB.filter((element) =>
        element.title.toLowerCase().includes(req.query.q as string),
      );
      res.json(filteredRecipe);
    } else {
      res.json(recipeFromDB);
    }
  } catch (err) {
    next(err);
  }
};

const readByUserId: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const userRecipes = await recipeRepository.readByUserId(userId);

    res.json(userRecipes);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newRecipe = {
      title: req.body.title,
      picture: req.file?.filename,
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

export default { add, browseMostRecent, readByTitle, readByUserId };
