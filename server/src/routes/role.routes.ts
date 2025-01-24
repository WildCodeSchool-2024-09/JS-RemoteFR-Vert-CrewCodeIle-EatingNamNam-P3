import express from "express";
import roleActions from "../modules/role/roleActions";

const router = express.Router();

router.post("/", roleActions.addRole);

export default router;
