import type { RequestHandler } from "express";
import stepRepository from "./stepRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const step = req.body.step;

    if (step) {
      for (const currentStep of step) {
        const recipeStep = { ...currentStep, recipe_id: req.body.recipeId };
        await stepRepository.create(recipeStep);
      }
    }
    res.status(200);
  } catch (err) {
    next(err);
  }
};

export default { add };
