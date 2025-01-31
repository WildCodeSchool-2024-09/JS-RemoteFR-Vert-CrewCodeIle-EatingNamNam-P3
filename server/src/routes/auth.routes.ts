import express from "express";
import { passwordComparison } from "../middleware/hashPassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post("/login", userActions.readByUserName, passwordComparison);

export default router;
