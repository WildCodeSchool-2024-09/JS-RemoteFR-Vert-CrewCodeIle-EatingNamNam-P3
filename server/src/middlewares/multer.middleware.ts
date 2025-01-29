import multer from "multer";

const MIME_TYPES: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/uploads/");
  },
  filename: (req, file, cb) => {
    const name = `recipepic${Date.now().toString(36)}${crypto.randomUUID()}`;
    const extension = MIME_TYPES[file.mimetype] || "unknown";

    cb(null, `${name}.${extension}`);
  },
});

export const upload = multer({ storage: storage });
