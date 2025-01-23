import express from "express";
import { hashPassword } from "../middleware/hashPassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post("/", hashPassword, userActions.add);

export default router;
