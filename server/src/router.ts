import express from "express";

const router = express.Router();

import recipeRouter from "./routes/recipe.routes";

router.use("/api/recipes", recipeRouter);

import dietTypeRouter from "./routes/dietType.routes";

router.use("/api/dietTypes", dietTypeRouter);

export default router;
