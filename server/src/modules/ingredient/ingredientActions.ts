import ingredientRepository from "./ingredientRepository";

import type { RequestHandler } from "express";

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
    res.status(201).json({
      message: "Nouvelle ingrédient",
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
