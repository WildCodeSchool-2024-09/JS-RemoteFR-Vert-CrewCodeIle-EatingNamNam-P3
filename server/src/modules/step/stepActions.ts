import type { RequestHandler } from "express";
import stepRepository from "./stepRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id);
    const steps = await stepRepository.read(recipeId);

    res.json(steps);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const step = req.body.step;

    if (step) {
      for (const currentStep of step) {
        const recipeStep = { ...currentStep, recipe_id: req.body.recipeId };
        await stepRepository.create(recipeStep);
      }
    }
    next();
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id);

    await stepRepository.delete(recipeId);

    next();
  } catch (err) {
    next(err);
  }
};

export default { add, read, destroy };
