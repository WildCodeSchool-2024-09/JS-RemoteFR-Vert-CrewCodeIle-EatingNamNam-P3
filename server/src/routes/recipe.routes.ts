import express from "express";

const router = express.Router();

import recipeActions from "../modules/recipe/recipeActions";

router.get("/top3", recipeActions.browse);
router.post("/", recipeActions.add);

export default router;
