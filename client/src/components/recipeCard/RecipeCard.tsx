import HealthRatingDisplay from "../ratingDisplay/HealthRatingDisplay";
import UserRatingDisplay from "../ratingDisplay/UserRatingDisplay";

import { Link } from "react-router-dom";

import style from "./recipeCard.module.css";

export default function RecipeCard() {
  return (
    <article className={style.cardContainer}>
      <figure className={style.recipePicture} />
      <h3 className={style.recipeTitle}>Titre de la recette</h3>
      <p className={style.author}>
        By{" "}
        <Link
          to={"/"}
          className={style.authorLink}
          rel="créateur de la recette"
        >
          Créateur
        </Link>
      </p>
      <UserRatingDisplay />
      <HealthRatingDisplay />
      <ul>
        <li className={style.prepTime}>33 mins</li>
        <li className={style.cookTime}>33 mins</li>
      </ul>
      <p className={style.resume}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus
        corrupti eaque? Maiores cupiditate vitae excepturi ratione consequuntur
        modi deleniti officiis maxime similique, incidunt pariatur! Sint cumque,
        deleniti tempora, vero distinctio repellendus vel repellat aperiam
        libero dolor, accusamus sapiente sunt magnam! Facere accusantium quod
        voluptatem distinctio odit rem alias neque.
      </p>
      <ul className={style.dietTypeList}>
        <li className={style.dietTypeIcon} />
      </ul>
    </article>
  );
}
