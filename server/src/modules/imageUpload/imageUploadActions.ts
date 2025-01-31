import type { RequestHandler } from "express";
import multer from "multer";
import { upload } from "../../middlewares/multer.middleware";

const uploadController: RequestHandler = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Erreur Multer: ${err.message}` });
    }
    if (err) {
      return res.status(400).json({ error: `Erreur: ${err.message}` });
    }
    req.body.picture = req.file?.filename || null;
    next();
  });
};

export default { uploadController };
