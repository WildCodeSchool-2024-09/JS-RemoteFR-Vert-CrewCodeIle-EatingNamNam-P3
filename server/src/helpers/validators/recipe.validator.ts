import type { RequestHandler } from "express";
import joi from "joi";

const schema = joi.object({
  step: joi.array().items(
    joi.object({
      step_order: joi.number().integer().min(1).max(21).required(),
      content: joi.string().min(10).max(255).required(),
    }),
  ),

  title: joi.string().min(3).max(60).required(),

  picture: joi.string().min(0).max(255),

  summary: joi.string().min(40).max(300).required(),

  prep_time: joi.number().integer().min(0).max(3000).required(),

  cook_time: joi.number().integer().min(0).max(3000).required(),

  serving: joi.number().integer().min(1).max(50).required(),
});

export const validateRecipeSchema: RequestHandler = (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(400).json({
      message: error.details,
    });
  }
};
