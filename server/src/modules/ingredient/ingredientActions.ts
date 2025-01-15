import ingredientRepository from "./ingredientRepository";

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const ingredientFromDB = await ingredientRepository.readAll();

    res.json(ingredientFromDB);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const parseId = Number.parseInt(req.params.id);
    const ingredientFromDB = await ingredientRepository.readAll();
    const ingredient = ingredientFromDB.find((i) => i.id === parseId);

    if (ingredient != null) {
      res.json(ingredient);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const ingredient = {
      id: Number(req.params.id),
      label: req.body.title,
      protein_amount: Number(req.body.protein_amount),
      carb_amount: Number(req.body.carb_amount),
      fat_amount: Number(req.body.fat_amount),
      calorie_amount: Number(req.body.calorie_amount),
      user_id: Number(req.params.user_id),
      unit_type_id: Number(req.params.unit_type_id),
    };
    const affectedRows = await ingredientRepository.update(ingredient);

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
    const newIngredient = {
      label: req.body.label,
      protein_amount: req.body.protein_amount,
      carb_amount: req.body.carb_amount,
      fat_amount: req.body.fat_amount,
      calorie_amount: req.body.calorie_amount,
      user_id: req.body.user_id,
      unit_type_id: req.body.unit_type_id,
    };
    const insertId = await ingredientRepository.create(newIngredient);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const ingredientId = Number(req.params.id);
    await ingredientRepository.delete(ingredientId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, destroy };
