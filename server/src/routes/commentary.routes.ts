import express from "express";

const router = express.Router();

import comActions from "../modules/commentary/commentaryAction";

router.post("/", comActions.add);

export default router;
