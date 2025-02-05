import type { RequestHandler } from "express";
import unitTypeRepository from "./unitTypeRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUntiType = {
      label: req.body.label,
    };

    const insertId = await unitTypeRepository.create(newUntiType);

    res.status(201).json({
      message: "Nouvelle unité créée",
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};
export default { add };
