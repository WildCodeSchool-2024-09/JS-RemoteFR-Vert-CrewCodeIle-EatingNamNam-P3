import express from "express";

const router = express.Router();

import recipeActions from "../modules/recipe/recipeActions";

router.get("/", recipeActions.browse);
router.get("/:id", recipeActions.read);

export default router;
