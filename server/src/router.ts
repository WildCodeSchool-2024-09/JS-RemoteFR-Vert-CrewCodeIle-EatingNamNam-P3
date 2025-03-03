import express from "express";

const router = express.Router();

import userRouter from "./routes/user.routes";

router.use("/api/users", userRouter);

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

import unitTypeRouter from "./routes/unitType.routes";

router.use("/api/unittypes", unitTypeRouter);

import authRouter from "./routes/auth.routes";

router.use("/api/auth", authRouter);

router.use(express.static("public/assets/uploads/"));

export default router;
