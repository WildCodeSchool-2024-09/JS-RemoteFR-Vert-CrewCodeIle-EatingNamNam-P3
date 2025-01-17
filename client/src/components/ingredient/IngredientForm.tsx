import type { AddIngredientData } from "../../lib/definitions";
import style from "./ingredient.module.css";

export default function IngredientForm() {
  const newIngredient = {
    label: "",
    protein_amount: Number(""),
    carb_amount: Number(""),
    fat_amount: Number(""),
    calorie_amount: Number(""),
    user_id: Number("1"),
    unit_type_id: Number("1"),
  };

  const handleSubmit = (IngredientData: AddIngredientData) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/ingredients`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(IngredientData),
    }).then((res) => res.json());
  };

  return (
    <section className={style.formingredient}>
      <form
        className={style.form}
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const label = formData.get("label") as string;
          const protein_amount = Number(formData.get("protein_amount"));
          const carb_amount = Number(formData.get("carb_amount"));
          const fat_amount = Number(formData.get("fat_amount"));
          const calorie_amount = Number(formData.get("calorie_amount"));
          const user_id = 1;
          const unit_type_id = 1;

          handleSubmit({
            label,
            protein_amount,
            carb_amount,
            fat_amount,
            calorie_amount,
            user_id,
            unit_type_id,
          });
        }}
      >
        <h2 className={style.title}>Ajouter un Ingrédient</h2>
        <label htmlFor="label" className={style.champ}>
          Nom de l'ingrédients
          <input
            type="text"
            name="label"
            defaultValue={newIngredient.label}
            className={style.bloc}
          />
        </label>

        <label htmlFor="protein_amount" className={style.champ}>
          Protein pour 100g
          <input
            type="number"
            name="protein_amount"
            defaultValue={newIngredient.protein_amount}
            className={style.bloc}
          />
        </label>

        <label htmlFor="carb_amount" className={style.champ}>
          Glucide pour 100g
          <input
            type="number"
            name="carb_amount"
            defaultValue={newIngredient.carb_amount}
            className={style.bloc}
          />
        </label>

        <label htmlFor="fat_amount" className={style.champ}>
          Lipide pour 100g
          <input
            type="number"
            name="fat_amount"
            defaultValue={newIngredient.fat_amount}
            className={style.bloc}
          />
        </label>

        <label htmlFor="calorie_amount" className={style.champ}>
          Calorie pour 100g
          <input
            type="number"
            name="calorie_amount"
            defaultValue={newIngredient.calorie_amount}
            className={style.bloc}
          />
        </label>

        <button type="submit" className={style.btn}>
          Ajouter
        </button>
      </form>
    </section>
  );
}
