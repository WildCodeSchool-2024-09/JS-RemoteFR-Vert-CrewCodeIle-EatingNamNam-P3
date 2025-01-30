import type { Request } from "express";
import multer from "multer";

const MIME_TYPES: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/uploads/");
  },
  filename: (req, file, cb) => {
    const name = `${Date.now().toString(36)}${crypto.randomUUID()}`;
    const extension = MIME_TYPES[file.mimetype] || "unknown";
    cb(null, `${name}.${extension}`);
  },
});

const MAX_FILE_SIZE = 3 * 1024 * 1024;

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (MIME_TYPES[file.mimetype]) {
    cb(null, true);
  } else {
    cb(new Error("Type de fichier non autorisé"));
  }
};

export const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter,
});
