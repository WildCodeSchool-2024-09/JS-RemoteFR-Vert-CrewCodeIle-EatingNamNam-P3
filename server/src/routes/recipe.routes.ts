import express from "express";

const router = express.Router();

import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

import recipeActions from "../modules/recipe/recipeActions";
import uploadImageActions from "../modules/uploadImage/uploadImageActions";

router.get("/top3", recipeActions.browseMostRecent);
router.post(
  "/",
  (req, res) => {
    console.info(req.body);
  },
  upload.single("file"),
  uploadImageActions.upload,
  recipeActions.add,
);

export default router;
