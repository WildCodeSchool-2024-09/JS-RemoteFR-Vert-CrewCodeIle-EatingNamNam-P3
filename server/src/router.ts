import express from "express";

const router = express.Router();

import roleRouter from "./routes/role.routes";

router.use("/api/roles", roleRouter);

export default router;
