import type { RequestHandler } from "express";
import commentaryRepository from "./commentaryRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCommentary = {
      rating: Number.parseInt(req.body.rating),
      com_content: req.body.com_content,
      com_picture: req.body.com_picture,
      user_id: Number.parseInt(req.body.user_id),
      recipe_id: Number.parseInt(req.body.recipe_id),
    };

    const insertId = await commentaryRepository.create(newCommentary);

    res.status(201).json({
      message: "Commentaire ajouter",
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};
const browse: RequestHandler = async (req, res, next) => {
  try {
    const commentary = await commentaryRepository.read();

    res.json(commentary);
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id);

    await commentaryRepository.delete(recipeId);

    next();
  } catch (err) {
    next(err);
  }
};

export default { add, browse, destroy };
