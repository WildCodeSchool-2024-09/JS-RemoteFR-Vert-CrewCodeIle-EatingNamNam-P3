import datejoi from "@joi/date";
import type { RequestHandler } from "express";
import basejoi from "joi";

const joi = basejoi.extend(datejoi);

const schema = joi.object({
  username: joi.string().min(2).max(20).required().alphanum(),

  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } }),

  firstname: joi.string().min(2).max(60).required(),

  lastname: joi.string().min(2).max(60).required(),

  localisation: joi.string().min(2).max(60).required(),

  profession: joi.string().min(2).max(100).required(),

  password_hash: joi.string().min(12).max(20).required(),

  birth_date: joi.date().format("YYYY-MM-DD").utc(),
});

export const validateUserSchema: RequestHandler = (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(400).json({
      message: error.details,
    });
  }
};
