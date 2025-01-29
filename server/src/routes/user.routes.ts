import express from "express";
import { validateUserSchema } from "../helpers/validators/user.validator";
import { hashPassword } from "../middleware/hashPassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post("/", validateUserSchema, hashPassword, userActions.add);

export default router;
