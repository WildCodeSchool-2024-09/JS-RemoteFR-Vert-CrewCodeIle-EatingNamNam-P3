import axios from "axios";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-toastify";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import type { RecipeDataType } from "../../lib/definitions";

const RecipeListPage = () => {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [recipeData, setRecipeData] = useState<RecipeDataType[]>([]);

  console.info(currentSearch);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = event.target as HTMLFormElement;
    const textInput = data.elements[0] as HTMLInputElement;
    setCurrentSearch(textInput.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes`,
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
          {},
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="CHERCHE LE PLAT DE TES REVES" />
        <button type="submit">ROCHERCHE</button>
      </form>
      {recipeData?.map((element: RecipeDataType) => (
        <RecipeCard key={element.id} recipeDataProps={element} />
      ))}
    </div>
  );
};

export default RecipeListPage;
