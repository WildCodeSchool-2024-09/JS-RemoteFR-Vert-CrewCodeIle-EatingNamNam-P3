import express from "express";

const router = express.Router();

import { validateRecipeSchema } from "../helpers/validators/recipe.validator";
import imageUploadActions from "../modules/imageUpload/imageUploadActions";
import recipeActions from "../modules/recipe/recipeActions";
import stepActions from "../modules/step/stepActions";

router.get("/top3", recipeActions.browseMostRecent);

router.post(
  "/",
  imageUploadActions.uploadController,
  validateRecipeSchema,
  recipeActions.add,
  stepActions.add,
);

export default router;
