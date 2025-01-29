import express from "express";

const router = express.Router();

import { validateRecipeSchema } from "../helpers/validators/recipe.validator";
import recipeActions from "../modules/recipe/recipeActions";
import stepActions from "../modules/step/stepActions";

import { upload } from "../middlewares/multer.middleware";

router.get("/top3", recipeActions.browseMostRecent);

router.post(
  "/",
  upload.single("file"),
  // (req, res, next) => {
  //   try {
  //     req.body.picture = req.file?.filename;
  //     console.info(req.body.picture);
  //     next;
  //   } catch (err) {
  //     next(err);
  //   }
  // },
  // validateRecipeSchema,
  recipeActions.add,
  stepActions.add,
);

export default router;
