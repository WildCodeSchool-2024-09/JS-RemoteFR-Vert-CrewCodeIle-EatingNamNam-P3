import express from "express";

const router = express.Router();

import { validateRecipeSchema } from "../helpers/validators/recipe.validator";
import recipeActions from "../modules/recipe/recipeActions";
import stepActions from "../modules/step/stepActions";

import { upload } from "../middlewares/multer.middleware";

router.get("/top3", recipeActions.browseMostRecent);

router.post(
  "/",
  validateRecipeSchema,
  upload.single("file"),
  recipeActions.add,
  stepActions.add,
);

export default router;

// router.use("api/browseUploads/", express.static("public/assets/images/"));
// la route pour aller voir les images
