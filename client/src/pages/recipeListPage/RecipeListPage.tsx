import axios from "axios";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-toastify";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import type { RecipeDataType } from "../../lib/definitions";
import style from "./recipeListPage.module.css";

const RecipeListPage = () => {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [recipeData, setRecipeData] = useState<RecipeDataType[]>([]);

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
          {
            params: currentSearch ? { q: currentSearch.toLowerCase() } : {},
          },
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error("Impossible de récupérer les données.");
      }
    };
    fetchData();
  }, [currentSearch]);

  return (
    <main className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Nom de recette"
        />
        <button className={style.searchButton} type="submit">
          <img src="/images/loupe-recherche.png" alt="boutton de recherche" />
        </button>
      </form>
      <section className={style.recipeList}>
        {recipeData?.map((element: RecipeDataType) => (
          <RecipeCard key={element.id} recipeDataProps={element} />
        ))}
      </section>
    </main>
  );
};

export default RecipeListPage;
