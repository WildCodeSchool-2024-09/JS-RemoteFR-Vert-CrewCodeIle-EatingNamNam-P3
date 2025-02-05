import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { RecipeDataAdminList } from "../../lib/definitions";
import { formatDate } from "../../services/dateFormatter";
import style from "./deleteRecipeForm.module.css";

const DeleteRecipeForm = () => {
  const [recipeData, setRecipeData] = useState<RecipeDataAdminList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/recipe-list`,
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
        );
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {recipeData?.map((currentRecipeData: RecipeDataAdminList) => (
        <section className={style.recipeFrame} key={currentRecipeData.id}>
          <ul className={style.recipeList}>
            <li className={style.recipeRow}>
              Recette {currentRecipeData.id} :
            </li>
            <li>{currentRecipeData.title}</li>
            <li>créée par {currentRecipeData.username}</li>
            <li>le {formatDate(currentRecipeData.created_at)}</li>
          </ul>
          <button type="button" className={style.deleteButton}>
            Supprimer la recette
          </button>
        </section>
      ))}
    </section>
  );
};

export default DeleteRecipeForm;
