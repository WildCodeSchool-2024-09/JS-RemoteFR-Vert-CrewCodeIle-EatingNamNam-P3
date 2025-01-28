import { useState } from "react";
import style from "./imageUploader.module.css";

export default function ImageUploader() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (
    fileEvent: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = fileEvent.target.files?.[0];

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <label className={style.label}>
        J'ajoute une image d'illustration :
        <input
          className={style.input}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      {imagePreview && (
        <img
          className={style.picturePreview}
          src={imagePreview}
          alt="Aperçu de votre fichier"
        />
      )}
    </>
  );
}
