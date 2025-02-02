import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type {
  IngredientType,
  RecipeIngredientType,
} from "../../lib/definitions";

import { useEffect, useState } from "react";
// import type { FormEvent } from "react";
export default function RecipeIngredient() {
  const { register, handleSubmit } = useForm<RecipeIngredientType>();
  const formSubmit: SubmitHandler<RecipeIngredientType> = async (data) => {
    console.info(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recipes/ri`,
        data,
      );
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout de l'ingredient", {});
    }
  };

  const [recipeData, setRecipeData] = useState<IngredientType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/ingredients`,
          {},
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des ingredient, veuillez essayer ultérieurement.",
          {},
        );
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label>
          quantité
          <input type="text" {...register("quantity")} />
        </label>
        <label>
          recipe id
          <input type="text" {...register("recipe_id")} />
        </label>
        <label>
          Choisir un ingrédient
          <select {...register("ingredient_id")}>
            inp
            {recipeData?.map((ingredient) => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}
