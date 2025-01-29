import express from "express";

const router = express.Router();

import recipeActions from "../modules/recipe/recipeActions";

import { upload } from "../middlewares/multer.middleware";

router.get("/top3", recipeActions.browseMostRecent);
router.post("/", upload.single("file"), recipeActions.add);

export default router;

// router.use("api/browseUploads/", express.static("public/assets/images/"));
// la route pour aller voir les images
