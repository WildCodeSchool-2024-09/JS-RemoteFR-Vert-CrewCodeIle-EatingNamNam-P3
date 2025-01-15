import type { RequestHandler } from "express";

import recipeRepository from "./recipeRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recipeRepository.readAll();

    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number.parseInt(req.params.id);
    const recipe = await recipeRepository.read(recipeId);

    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const recipe = {
      id: Number.parseInt(req.params.id),
      title: req.body.title,
      picture: req.body.picture,
      summary: req.body.summary,
      prep_time: Number.parseInt(req.body.prep_time),
      cook_time: Number.parseInt(req.body.cook_time),
      serving: Number.parseInt(req.body.serving),
    };

    const affectedRows = await recipeRepository.update(recipe);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
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
    };

    const insertId = await recipeRepository.create(newRecipe);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number.parseInt(req.params.id);
    await recipeRepository.delete(recipeId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, destroy };
