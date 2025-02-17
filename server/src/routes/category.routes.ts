import express from "express";

const router = express.Router();

import categoryActions from "../modules/category/categoryActions";

router.post("/", categoryActions.add);

export default router;
