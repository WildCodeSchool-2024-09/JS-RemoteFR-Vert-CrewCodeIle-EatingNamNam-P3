import express from "express";
import ingredientActions from "../modules/ingredient/ingredientActions";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.get("/", ingredientActions.readBylabel);
router.post("/", userActions.readIdByTokenUsername, ingredientActions.add);

export default router;
