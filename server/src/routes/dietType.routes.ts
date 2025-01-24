import express from "express";

const router = express.Router();

import dietTypeActions from "../modules/dietType/dietTypeActions";

router.post("/", dietTypeActions.add);

export default router;
