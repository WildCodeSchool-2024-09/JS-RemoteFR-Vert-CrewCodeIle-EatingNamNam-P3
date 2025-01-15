import express from "express";

const router = express.Router();

import recipeActions from "./modules/recipe/recipeActions";

router.get("/api/recipe", recipeActions.browse);

export default router;
