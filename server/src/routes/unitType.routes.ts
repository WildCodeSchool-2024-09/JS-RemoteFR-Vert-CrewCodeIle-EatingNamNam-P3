import express, { Router } from "express";

const router = express.Router();

import unitTypeActions from "../modules/unitType/unitTypeActions";

router.post("/", unitTypeActions.add);

export default router;
