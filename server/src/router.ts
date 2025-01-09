import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemRouter from "./router/item.routes";

router.use("/api/items", itemRouter);

import recipeRouter from "./router/recipe.routes";

router.use("/api/recipes", recipeRouter);

/* ************************************************************************* */

export default router;
