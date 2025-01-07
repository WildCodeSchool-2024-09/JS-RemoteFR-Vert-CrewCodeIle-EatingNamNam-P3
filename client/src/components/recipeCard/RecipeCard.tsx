import HealthRatingDisplay from "../ratingDisplay/HealthRatingDisplay";
import UserRatingDisplay from "../ratingDisplay/UserRatingDisplay";
import style from "./recipeCard.module.css";

export default function RecipeCard() {
  return (
    <div className={style.cardContainer}>
      <div className={style.recipePicture} />
      <h2 className={style.h2}>Nom de la recette sur deux lignes</h2>
      <div className={style.infosContainer}>
        <div className={style.leftInfosContainer}>
          <UserRatingDisplay />
          <HealthRatingDisplay />
        </div>
        <div className={style.rightInfosContainer}>
          <p className={style.rightInfo}>40 mins</p>
          <p className={style.rightInfo}>9 ings</p>
        </div>
      </div>
      <p className={style.resume}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore
        quis a nostrum quos, ad doloremque repellat saepe sit, facilis
        perspiciatis quaerat debitis exercitationem blanditiis (...)
      </p>
      <ul className={style.labelContainer}>
        <li className={style.li} />
        <li className={style.li} />
        <li className={style.li} />
        <li className={style.li} />
      </ul>
    </div>
  );
}
