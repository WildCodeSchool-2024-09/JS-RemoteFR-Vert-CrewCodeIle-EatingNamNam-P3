import type { RecipeDataType } from "../../lib/definitions";
import RecipeCard from "../recipeCard/RecipeCard";
import style from "./discoveryMain.module.css";
import { useEffect, useState } from "react";

export default function DiscoveryMain() {
  const [recipeData, setRecipeData] = useState<RecipeDataType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipes/`)
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
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
