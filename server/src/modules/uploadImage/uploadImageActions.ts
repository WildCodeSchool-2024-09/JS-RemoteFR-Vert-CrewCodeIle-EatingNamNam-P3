import type { RequestHandler } from "express";

const upload: RequestHandler = (req, res, next) => {
  try {
    console.info(req.file?.path);
    console.info(req.body.picture);
    res.status(201).json({
      message: "Image uploadée avec succès 🤟",
    });
    next();
  } catch (err) {
    next(err);
  }
};

export default { upload };
