import HealthRatingDisplay from "../ratingDisplay/HealthRatingDisplay";
import UserRatingDisplay from "../ratingDisplay/UserRatingDisplay";
import style from "./recipeCard.module.css";

/** On importe un fichier json afin de simuler la base de données future */
import sampleRecipe from "../../lib/sampleRecipe.json";

export default function RecipeCard() {
  /** On a ici une variable qui détermine le maximum de lettres possibles pour l'affichage du résumé des recettes sur leur fiche.*/
  const RESUME_MAX_LENGTH = 250;
  const resumeSlice =
    sampleRecipe.recipe1.resume.length > RESUME_MAX_LENGTH
      ? `${(sampleRecipe.recipe1.resume).slice(0, RESUME_MAX_LENGTH)}( ... )`
      : sampleRecipe.recipe1.resume;

  return (
    <article className={style.cardContainer}>
      <figure
        className={style.recipePicture}
        style={{ backgroundImage: `url(${sampleRecipe.recipe1.picture})` }}
      />
      <h2 className={style.h2}>{sampleRecipe.recipe1.title}</h2>
      <p className={style.author}>
        By{" "}
        <a className={style.link} href="_">
          {sampleRecipe.recipe1.recipe_author}
        </a>
      </p>
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
      <p className={style.resume}>{resumeSlice}</p>
      <ul className={style.labelContainer}>
        {/* /** On crée des listes vides afin de simuler des icônes à venir avec le css*/}
        {sampleRecipe.recipe1.diet_type.map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={index} className={style.li} />
        ))}
      </ul>
    </article>
  );
}
