import express from "express";

const router = express.Router();

import { validateRecipeSchema } from "../helpers/validators/recipe.validator";
import imageUploadActions from "../modules/imageUpload/imageUploadActions";
import recipeActions from "../modules/recipe/recipeActions";
import recipeIngredientActions from "../modules/recipeIngredient/recipeIngredientActions";
import stepActions from "../modules/step/stepActions";
import userActions from "../modules/user/userActions";

router.get("/discoveries", recipeActions.browseMostRecent);
router.get("/recipe-list", recipeActions.browseAdminRecipeList);
router.get("/", recipeActions.readByTitle);
router.get("/:id", recipeActions.read);
router.get("/:userId", recipeActions.readByUserId);
router.post(
  "/",
  imageUploadActions.uploadController,
  validateRecipeSchema,
  userActions.readIdByTokenUsername,
  recipeActions.add,
  stepActions.add,
  recipeIngredientActions.add,
);
router.delete("/:id", stepActions.destroy, recipeActions.destroy);

export default router;
