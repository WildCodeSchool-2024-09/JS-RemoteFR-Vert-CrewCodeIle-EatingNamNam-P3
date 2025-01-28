import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import style from "./imageUploader.module.css";

export default function ImageUploader() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    if (file) {
      setImagePreview(URL.createObjectURL(file)); // affiche l'aperçu
      setSelectedImage(file); // Stocke le fichier sélectionné pour l'upload
    } else {
      setImagePreview(null);
      setSelectedImage(null);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      toast.error("Aucun fichier sélectionné.");
      return;
    }

    toast.success("Téléchargement en cours...");

    const formData = new FormData();
    formData.append("file", selectedImage); // ajoute le fichier dans la requête

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recipes/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Super important pour indiquer qu'on envoie un fichier
          },
        },
      );
      toast.success(`Succès : ${response.data.message}`);
    } catch (err) {
      toast.error("Ça a foiré ! 😵");
    }
  };

  return (
    <>
      <ToastContainer />
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
        <>
          <img
            className={style.picturePreview}
            src={imagePreview}
            alt="Aperçu de votre fichier"
          />
          <button type="button" onClick={uploadImage}>
            Pouet
          </button>
        </>
      )}
    </>
  );
}
