import express from "express";
import userActions from "../modules/userActions";

const router = express.Router();

router.post("/", userActions.add);

export default router;
