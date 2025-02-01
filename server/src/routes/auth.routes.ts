import express from "express";
import { passwordComparison } from "../middleware/hashPassword.middleware";
import authActions from "../modules/auth/authActions";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post(
  "/login",
  userActions.readByUserName,
  passwordComparison,
  authActions.login,
);

export default router;
