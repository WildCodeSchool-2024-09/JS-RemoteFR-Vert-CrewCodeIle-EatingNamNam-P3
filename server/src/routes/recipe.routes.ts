import express from "express";

const router = express.Router();

import { validateRecipeSchema } from "../helpers/validators/recipe.validator";
import imageUploadActions from "../modules/imageUpload/imageUploadActions";
import ingredientActions from "../modules/ingredient/ingredientActions";
import recipeActions from "../modules/recipe/recipeActions";
import recipeIngredientActions from "../modules/recipeIngredient/recipeIngredientActions";
import stepActions from "../modules/step/stepActions";
router.get("/top3", recipeActions.browseMostRecent);

router.post(
  "/",
  imageUploadActions.uploadController,
  validateRecipeSchema,
  recipeActions.add,
  stepActions.add,
  recipeIngredientActions.add,
);

router.post("/ri", ingredientActions.readBylabel, recipeIngredientActions.add);
export default router;
