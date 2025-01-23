import express from "express";

const router = express.Router();

import userRouter from "./routes/user.routes";

router.use("/api/users", userRouter);

import roleRouter from "./routes/role.routes";

router.use("/api/roles", roleRouter);

import recipeRouter from "./routes/recipe.routes";

router.use("/api/recipes", recipeRouter);

export default router;
