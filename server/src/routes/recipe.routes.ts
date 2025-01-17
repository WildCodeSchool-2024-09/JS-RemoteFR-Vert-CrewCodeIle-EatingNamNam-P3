import express from "express";

const router = express.Router();

import recipeActions from "../modules/recipe/recipeActions";

router.get("/", recipeActions.browse);
router.get("/:id", recipeActions.read);
router.put("/:id", recipeActions.edit);
router.post("/", recipeActions.add);
router.delete("/:id", recipeActions.destroy);

export default router;
