import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import type { RecipeDetailsDataType } from "../../lib/definitions";
import { formatDateMini } from "../../services/dateFormatter";
import style from "./recipeDetailsPage.module.css";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipeDetailsData, setRecipeDetailsData] =
    useState<RecipeDetailsDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/${id}`,
        );
        setRecipeDetailsData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
        );
      }
    };

    fetchData();
  }, [id]);

  if (!recipeDetailsData) return <p>Chargement...</p>;

  const { recipe, ingredients, steps } = recipeDetailsData;

  return (
    recipeDetailsData && (
      <main className={style.main}>
        <section className={style.container}>
          <h2 className={style.recipeTitle}>{recipe.title}</h2>
          <p className={style.recipeSummary}>{recipe.summary}</p>
          <figure
            className={style.recipePicture}
            style={{
              backgroundImage: `url(${import.meta.env.VITE_API_URL}/${recipe.picture})`,
            }}
          />
          <p className={style.author}>
            recette écrite par{" "}
            <Link
              to={`/liste-utilisateur/${recipe.user_id}`}
              className={style.authorLink}
              rel="créateur de la recette"
            >
              {recipe.username}
            </Link>
          </p>
          <p className={style.date}>le {formatDateMini(recipe.created_at)}</p>
          <h3 className={style.prepTitle}>TEMPS DE PRÉPARATION</h3>
          <p className={style.prepTime}>{recipe.prep_time} minutes</p>
          <h3 className={style.cookTitle}>TEMPS DE CUISSON</h3>
          <p className={style.cookTime}>{recipe.cook_time} minutes</p>
          <h3 className={style.ingredientsTitle}>INGRÉDIENTS</h3>
          <ul className={style.ingredients}>
            {ingredients.map((ing) => (
              <li
                className={style.ingredientsList}
                key={ing.recipe_ingredient_id}
              >
                {ing.quantity} x {ing.label}
              </li>
            ))}
          </ul>
          <h3 className={style.stepsTitle}>INSTRUCTIONS</h3>
          <ol className={style.steps}>
            {steps.map((step) => (
              <li className={style.stepList} key={step.step_order}>
                {step.content}
              </li>
            ))}
          </ol>
        </section>
      </main>
    )
  );
}
