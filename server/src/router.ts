import express from "express";

const router = express.Router();

import roleRouter from "./routes/role.routes";

router.use("/api/roles", roleRouter);

import recipeRouter from "./routes/recipe.routes";

router.use("/api/recipes", recipeRouter);
import ingredientRouter from "./routes/ingredient.routes";

router.use("/api/ingredients", ingredientRouter);

import dietTypeRouter from "./routes/dietType.routes";

router.use("/api/dietTypes", dietTypeRouter);

import categoryRouter from "./routes/category.routes";

router.use("/api/category", categoryRouter);

import commentaryRouter from "./routes/commentary.routes";

router.use("/api/commentary", commentaryRouter);

export default router;
