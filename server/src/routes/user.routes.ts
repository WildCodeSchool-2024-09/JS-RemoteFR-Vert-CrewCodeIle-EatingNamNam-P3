import express from "express";
import { validateUserSchema } from "../helpers/validators/user.validator";
import { hashPassword } from "../middlewares/hashPassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.get("/", userActions.readByUserName);
router.get("/:id", userActions.readById);
router.post("/", validateUserSchema, hashPassword, userActions.add);

export default router;
