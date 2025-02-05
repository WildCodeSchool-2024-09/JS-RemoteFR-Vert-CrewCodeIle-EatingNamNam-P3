import express from "express";

const router = express.Router();

import comActions from "../modules/commentary/commentaryAction";

router.post("/", comActions.add);
router.get("/", comActions.browse);

export default router;
