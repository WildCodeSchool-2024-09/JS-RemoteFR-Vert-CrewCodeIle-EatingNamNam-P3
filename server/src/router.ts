import express from "express";

const router = express.Router();

import roleRouter from "./routes/role.routes";

router.use("/api/roles", roleRouter);

import recipeRouter from "./routes/recipe.routes";

router.use("/api/recipes", recipeRouter);
import ingredientRouter from "./routes/ingredient.routes";

router.use("/api/ingredients", ingredientRouter);

export default router;
