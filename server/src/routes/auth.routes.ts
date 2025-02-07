import express from "express";
import { passwordComparison } from "../middlewares/hashPassword.middleware";
import authActions from "../modules/auth/authActions";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post(
  "/login",
  userActions.readPasswordByUserName,
  passwordComparison,
  authActions.login,
);
router.use(authActions.verifyToken, authActions.authWall);
router.get("/adminChecking", userActions.readTokenRoleByUsername);

export default router;
