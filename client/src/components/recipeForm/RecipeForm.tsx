import type { AddRecipeDataType } from "../../lib/definitions.ts";
import style from "./recipeForm.module.css";

export default function RecipeForm() {
  const newRecipe = {
    title: "",
    picture: "",
    summary: "",
    prep_time: Number(""),
    cook_time: Number(""),
    serving: Number(""),
    user_id: 1,
  };

  const handleSubmit = (recipeData: AddRecipeDataType) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    }).then((res) => res.json());
  };

  return (
    <form
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const title = formData.get("title") as string;
        const picture = formData.get("picture") as string;
        const summary = formData.get("summary") as string;
        const prep_time = Number(formData.get("prep_time"));
        const cook_time = Number(formData.get("cook_time"));
        const serving = Number(formData.get("serving"));
        const user_id = 1;

        handleSubmit({
          title,
          picture,
          summary,
          prep_time,
          cook_time,
          serving,
          user_id,
        });
      }}
    >
      <label>
        Titre de la recette :
        <input
          className={style.input}
          type="text"
          name="title"
          defaultValue={newRecipe.title}
        />
      </label>
      <label>
        Image de la recette :
        <input
          className={style.input}
          type="text"
          name="picture"
          defaultValue={newRecipe.picture}
        />
      </label>
      <label>
        Résumé :
        <input
          className={style.input}
          type="text"
          name="summary"
          defaultValue={newRecipe.summary}
        />
      </label>
      <label>
        Temps de préparation :
        <input
          className={style.input}
          type="number"
          name="prep_time"
          defaultValue={newRecipe.prep_time}
        />
      </label>
      <label>
        Temps de cuisson :
        <input
          className={style.input}
          type="number"
          name="cook_time"
          defaultValue={newRecipe.cook_time}
        />
      </label>
      <label>
        Nombre de parts :
        <input
          className={style.input}
          type="number"
          name="serving"
          defaultValue={newRecipe.serving}
        />
      </label>
      <button className={style.button} type="submit">
        Ajouter la recette
      </button>
    </form>
  );
}
