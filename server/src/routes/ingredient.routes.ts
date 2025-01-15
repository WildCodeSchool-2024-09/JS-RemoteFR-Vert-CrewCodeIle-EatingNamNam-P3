import express from "express";
import ingredientActions from "../modules/ingredient/ingredientActions";

const router = express.Router();

router.get("/", ingredientActions.browse);

export default router;
