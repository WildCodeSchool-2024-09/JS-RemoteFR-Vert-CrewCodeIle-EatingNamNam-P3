import { Link } from "react-router-dom";
import style from "./recipeCard.module.css";
import type { RecipeDataType } from "../../lib/definitions";

export default function RecipeCard({
  recipeDataProps,
}: { recipeDataProps: RecipeDataType }) {
  return (
    <article className={style.cardContainer}>
      <figure className={style.recipePicture} />
      <h3 className={style.recipeTitle}>{recipeDataProps.title}</h3>
      <p className={style.author}>
        By{" "}
        <Link
          to={"/"}
          className={style.authorLink}
          rel="créateur de la recette"
        >
          {recipeDataProps.user_id}
        </Link>
      </p>
      <ul>
        <li className={style.prepTime}>{recipeDataProps.prep_time}</li>
        <li className={style.cookTime}>{recipeDataProps.cook_time}</li>
      </ul>
      <p className={style.resume}>{recipeDataProps.summary}</p>
      <ul className={style.dietTypeList}>
        <li className={style.dietTypeIcon} />
      </ul>
    </article>
  );
}
