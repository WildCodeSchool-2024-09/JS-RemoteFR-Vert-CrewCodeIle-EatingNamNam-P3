import HealthRatingDisplay from "../ratingDisplay/HealthRatingDisplay";
import UserRatingDisplay from "../ratingDisplay/UserRatingDisplay";
import style from "./recipeCard.module.css";

export default function RecipeCard() {
  /** On a ici une variable qui détermine le maximum de lettres possibles pour l'affichage du résumé des recettes sur leur fiche.*/
  // const RESUME_MAX_LENGTH = 250;
  const resumeSlice =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quisquam unde odit? Voluptas sint, illum blanditiis voluptatum dolor veniam quasi perspiciatis excepturi consequuntur rerum. A amet quibusdam qui veritatis iure nisi velit adipisci et nobis perspiciatis natus, debitis nam saepe molestiae ab! Iste asperiores assumenda molestiae quidem ea sunt eaque voluptates nesciunt officiis odit aliquid impedit, odio amet reiciendis architecto voluptatum facilis eveniet id officia laborum dolorem quos corporis natus? Dolor, et. Debitis esse nihil neque doloribus excepturi labore possimus quisquam sapiente unde, explicabo ea nesciunt eos nobis eaque quia quae asperiores similique ab. Quo corporis cum eius autem, velit quasi magnam nam molestiae, voluptas est assumenda magni id mollitia qui libero eum illo animi totam. Recusandae tenetur voluptatibus expedita beatae aliquam cupiditate nam. Pariatur culpa dignissimos, in quas suscipit consectetur vero fuga mollitia voluptatum iure veritatis consequuntur officia porro dolorum labore a recusandae. Minima sapiente sit molestias eaque soluta facere mollitia unde voluptatem, neque perferendis ipsa libero voluptatibus temporibus earum! Libero quis minima perferendis nostrum, ullam ipsa! Explicabo, magni aspernatur architecto quae nihil commodi dolorum illo omnis quia hic sint expedita laboriosam cupiditate sit molestias saepe aperiam iusto iure reprehenderit vel. Nesciunt repellat enim debitis quas officia, quaerat odit";
  // "Namnmam".length > RESUME_MAX_LENGTH
  //   ? `${(sampleRecipe.recipe1.resume).slice(0, RESUME_MAX_LENGTH)}( ... )`
  //   : sampleRecipe.recipe1.resume;

  return (
    <article className={style.cardContainer}>
      <figure
        className={style.recipePicture}
        // style={{ backgroundImage: `url(_)` }}
      />
      <h2 className={style.h2}>Namnmam</h2>
      <p className={style.author}>
        By{" "}
        <a className={style.link} href="_">
          Namnmam
        </a>
      </p>
      <div className={style.infosContainer}>
        <div className={style.leftInfosContainer}>
          <UserRatingDisplay />
          <HealthRatingDisplay />
        </div>
        <div className={style.rightInfosContainer}>
          <p className={style.rightInfo}>33 mins</p>
          <p className={style.rightInfo}>33 mins</p>
        </div>
      </div>
      <p className={style.resume}>{resumeSlice}</p>
      <ul className={style.labelContainer}>
        {/* {sampleRecipe.recipe1.diet_type.map((_, index) => (
          <li key={index} className={style.li} />
        ))} */}
      </ul>
    </article>
  );
}
