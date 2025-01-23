import axios from "axios";
import { useEffect, useState } from "react";
import type { RecipeDataType } from "../../lib/definitions";
import RecipeCard from "../recipeCard/RecipeCard";
import style from "./discoveryMain.module.css";

export default function DiscoveryMain() {
  const [recipeData, setRecipeData] = useState<RecipeDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/top3`,
        );
        setRecipeData(response.data);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
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
