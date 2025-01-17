import express from "express";

const router = express.Router();

import recipeRouter from "./routes/recipe.routes";

router.use("/api/recipes", recipeRouter);

export default router;
