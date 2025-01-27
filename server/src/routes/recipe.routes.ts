import express from "express";

const router = express.Router();

import recipeActions from "../modules/recipe/recipeActions";
import stepActions from "../modules/step/stepActions";

router.get("/top3", recipeActions.browseMostRecent);
router.post("/", recipeActions.add, stepActions.add);

export default router;
