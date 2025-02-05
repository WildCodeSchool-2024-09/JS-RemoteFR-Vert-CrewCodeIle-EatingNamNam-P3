import express from "express";

const router = express.Router();

import { validateRecipeSchema } from "../helpers/validators/recipe.validator";
import imageUploadActions from "../modules/imageUpload/imageUploadActions";
import recipeActions from "../modules/recipe/recipeActions";
import stepActions from "../modules/step/stepActions";

router.get("/discoveries", recipeActions.browseMostRecent);
router.get("/recipe-list", recipeActions.browseAdminRecipeList);
router.get("/", recipeActions.readByTitle);

router.post(
  "/",
  imageUploadActions.uploadController,
  validateRecipeSchema,
  recipeActions.add,
  stepActions.add,
);
router.delete("/:id", stepActions.destroy, recipeActions.destroy);

export default router;
