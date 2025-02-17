import express from "express";
import ingredientActions from "../modules/ingredient/ingredientActions";

const router = express.Router();

router.get("/", ingredientActions.readBylabel);
router.post("/", ingredientActions.add);

export default router;
