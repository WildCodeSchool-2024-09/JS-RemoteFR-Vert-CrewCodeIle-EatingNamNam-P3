import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import type { RecipeDetailsDataType } from "../../lib/definitions";
import { formatDate } from "../../services/dateFormatter";
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
        toast.error("Impossible de récupérer les données.");
      }
    };

    fetchData();
  }, [id]);

  if (!recipeDetailsData) return <p>Chargement...</p>;

  const { recipe, steps } = recipeDetailsData;

  return (
    recipeDetailsData && (
      <main className={style.main}>
        <section className={style.container}>
          <h2 className={style.recipeTitle}>{recipe.title}</h2>
          <figure
            className={style.recipePicture}
            style={{
              backgroundImage: `url(${import.meta.env.VITE_API_URL}/${recipe.picture})`,
            }}
          />
          <p className={style.recipeSummary}>{recipe.summary}</p>
          <p className={style.author}>
            recette créée par{" "}
            <Link
              to={"/"}
              className={style.authorLink}
              rel="créateur de la recette"
            >
              {recipe.username}
            </Link>
            <p>le {formatDate(recipe.created_at)}</p>
          </p>
          <h3 className={style.subTitle}>TEMPS DE PRÉPARATION</h3>
          <p>{recipe.prep_time} minutes</p>
          <h3 className={style.subTitle}>TEMPS DE CUISSON</h3>
          <p>{recipe.cook_time} minutes</p>
          <h3 className={style.subTitle}>
            INGRÉDIENTS ( pour {recipe.serving} parts)
          </h3>
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
