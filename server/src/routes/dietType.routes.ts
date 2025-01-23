import express from "express";

const router = express.Router();

import dietTypeActions from "../modules/dietType/DietTypeActions";

router.post("/", dietTypeActions.add);

export default router;
