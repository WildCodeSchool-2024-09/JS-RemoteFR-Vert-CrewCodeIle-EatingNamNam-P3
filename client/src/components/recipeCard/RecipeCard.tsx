import HealthRatingDisplay from "../ratingDisplay/HealthRatingDisplay";
import UserRatingDisplay from "../ratingDisplay/UserRatingDisplay";
import style from "./recipeCard.module.css";

import sampleRecipe from "../../lib/sampleRecipe.json";

export default function RecipeCard() {
  return (
    <article className={style.cardContainer}>
      <figure className={style.recipePicture} />
      <h2 className={style.h2}>{sampleRecipe.recipe1.title}</h2>
      <div className={style.infosContainer}>
        <div className={style.leftInfosContainer}>
          <UserRatingDisplay />
          <HealthRatingDisplay />
        </div>
        <div className={style.rightInfosContainer}>
          <p className={style.rightInfo}>
            {sampleRecipe.recipe1.cookingTime} mins
          </p>
          <p className={style.rightInfo}>
            {sampleRecipe.recipe1.prepTime} mins
          </p>
        </div>
      </div>
      <p className={style.resume}>{sampleRecipe.recipe1.resume}</p>
      <ul className={style.labelContainer}>
        <li className={style.li} />
        <li className={style.li} />
        <li className={style.li} />
        <li className={style.li} />
      </ul>
    </article>
  );
}
