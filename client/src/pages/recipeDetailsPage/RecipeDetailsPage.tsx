import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import type { RecipeDataType } from "../../lib/definitions";
import { formatDate } from "../../services/dateFormatter";
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
        <figure
          className={style.recipePicture}
          style={{
            backgroundImage: `url(${import.meta.env.VITE_API_URL}/${recipeData.picture})`,
          }}
        />
        <p>{recipeData.summary}</p>
        <p>{recipeData.prep_time}</p>
        <p>{recipeData.cook_time}</p>
        <p>{recipeData.serving}</p>
        <p>
          recette créée par <a href="/">{recipeData.username}</a> le{" "}
          {formatDate(recipeData.created_at)}
        </p>
      </main>
    )
  );
}
