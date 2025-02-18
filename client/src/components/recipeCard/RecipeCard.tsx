import { Link } from "react-router-dom";
import type { RecipeDataType } from "../../lib/definitions";
import style from "./recipeCard.module.css";

export default function RecipeCard({
  recipeDataProps,
}: { recipeDataProps: RecipeDataType }) {
  return (
    <article className={style.cardContainer}>
      <Link to={`/recette-details/${recipeDataProps.id}`}>
        <figure
          className={style.recipePicture}
          style={{
            backgroundImage: `url(${import.meta.env.VITE_API_URL}/${recipeDataProps.picture})`,
          }}
        />
      </Link>
      <h3 className={style.recipeTitle}>{recipeDataProps.title}</h3>
      <p className={style.author}>
        By{" "}
        <Link
          to={`/liste-utilisateur/${recipeDataProps.user_id}`}
          className={style.authorLink}
          rel="créateur de la recette"
        >
          {recipeDataProps.username}
        </Link>
      </p>
      <ul>
        <li className={style.prepTime}>
          Temps de préparation : {recipeDataProps.prep_time} min
        </li>
        <li className={style.cookTime}>
          Temps de cuisson : {recipeDataProps.cook_time} min
        </li>
      </ul>
      <p className={style.resume}>{recipeDataProps.summary}</p>
    </article>
  );
}
