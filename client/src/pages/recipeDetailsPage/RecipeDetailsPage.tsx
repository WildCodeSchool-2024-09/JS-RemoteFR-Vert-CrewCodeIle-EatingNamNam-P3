import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import type { RecipeDataType } from "../../lib/definitions";
import style from "./recipeDetailsPage.module.css";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<RecipeDataType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/${id}`,
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
        );
      }
    };

    fetchData();
  }, [id]);
  return (
    recipeData && (
      <main className={style.main}>
        <h2>{recipeData.title}</h2>
        {/* <img
          className={style.recipePicture}
          src={`../../../../server/public/assets/uploads/${recipeData.picture}`}
          alt="recipe illustration"
        />
        <img src="../../../public/images/fond-nourriture-ingredients.jpg" /> */}
      </main>
    )
  );
}
