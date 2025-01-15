import express from "express";
import ingredientActions from "../modules/ingredient/ingredientActions";

const router = express.Router();

router.get("/", ingredientActions.browse);
router.get("/:id", ingredientActions.read);
router.put("/:id", ingredientActions.edit);
router.post("/", ingredientActions.add);
router.delete("/:id", ingredientActions.destroy);

export default router;
