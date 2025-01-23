import express from "express";

const router = express.Router();

import recipeRouter from "./routes/recipe.routes";

router.use("/api/recipes", recipeRouter);

import categoryRouter from "./routes/category.routes";

router.use("/api/category", categoryRouter);

export default router;
