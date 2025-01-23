import express from "express";

const router = express.Router();

import recipeActions from "../modules/recipe/recipeActions";

router.get("/top3", recipeActions.browseMostRecent);
router.post("/", recipeActions.add);

export default router;
