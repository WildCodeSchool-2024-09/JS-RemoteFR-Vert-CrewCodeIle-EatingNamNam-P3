import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import type { RecipeDetailsDataType } from "../../lib/definitions";
import { formatDate } from "../../services/dateFormatter";
import style from "./recipeDetailsPage.module.css";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<RecipeDetailsDataType>();

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
        <section className={style.container}>
          <h2 className={style.recipeTitle}>{recipeData.title}</h2>
          <figure
            className={style.recipePicture}
            style={{
              backgroundImage: `url(${import.meta.env.VITE_API_URL}/${recipeData.picture})`,
            }}
          />
          <p className={style.recipeSummary}>{recipeData.summary}</p>
          <p className={style.author}>
            recette créée par{" "}
            <Link
              to={"/"}
              className={style.authorLink}
              rel="créateur de la recette"
            >
              {recipeData.username}
            </Link>
            <p>le {formatDate(recipeData.created_at)}</p>
          </p>
          <h3 className={style.subTitle}>TEMPS DE PRÉPARATION</h3>
          <p>{recipeData.prep_time} minutes</p>
          <h3 className={style.subTitle}>TEMPS DE CUISSON</h3>
          <p>{recipeData.cook_time} minutes</p>
          <h3 className={style.subTitle}>
            INGRÉDIENTS ( pour {recipeData.serving} parts)
          </h3>
          <h3 className={style.subTitle}>INSTRUCTIONS</h3>
          <ol className={style.steps}>
            {recipeData.steps?.map((step) => (
              <li className={style.stepList} key={step.step_order}>
                {step.content}
              </li>
            ))}
          </ol>
          <h3 className={style.subTitle}>DONNÉES NUTRITIONNELLES</h3>
        </section>
        <section className={style.container}>
          <h4 className={style.commentsTitle}>Commentaires</h4>
        </section>
      </main>
    )
  );
}
