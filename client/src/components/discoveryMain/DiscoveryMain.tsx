import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { RecipeDataType } from "../../lib/definitions";
import RecipeCard from "../recipeCard/RecipeCard";
import style from "./discoveryMain.module.css";

export default function DiscoveryMain() {
  const [recipeData, setRecipeData] = useState<RecipeDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/discoveries`,
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error("Impossible de récupérer les données.");
      }
    };

    fetchData();
  }, []);

  return (
    <main className={style.main}>
      {recipeData?.map((currentRecipeData: RecipeDataType) => (
        <RecipeCard
          key={currentRecipeData.id}
          recipeDataProps={currentRecipeData}
        />
      ))}
    </main>
  );
}
