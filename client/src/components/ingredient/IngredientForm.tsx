import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { AddIngredientData } from "../../lib/definitions";
import style from "./ingredient.module.css";

export default function IngredientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddIngredientData>();

  const formSubmit: SubmitHandler<AddIngredientData> = (data) => {
    axios.post(`${import.meta.env.VITE_API_URL}/api/ingredients`, data);
  };

  return (
    <section className={style.formingredient}>
      <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
        <h2 className={style.title}>Ajouter un Ingrédient</h2>
        <label htmlFor="label" className={style.champ}>
          Nom de l'ingrédient
          <input
            type="text"
            className={style.bloc}
            {...register("label", { required: true })}
          />
          {errors.label && (
            <span className={style.error}>Champ obligatoire</span>
          )}
        </label>
        <label htmlFor="protein_amount" className={style.champ}>
          Proteine
          <input
            type="number"
            step="0.1"
            className={style.bloc}
            {...register("protein_amount", { required: true, minLength: 0 })}
          />
          {errors.protein_amount && (
            <span className={style.error}>Champ obligatoire</span>
          )}
        </label>
        <label htmlFor="carb_amount" className={style.champ}>
          Glucide
          <input
            step="0.1"
            type="number"
            className={style.bloc}
            {...register("carb_amount", { required: true, min: 2 })}
          />
          {errors.carb_amount && errors.carb_amount.type === "required" && (
            <span className={style.error}>Champ obligatoire</span>
          )}
        </label>
        <label htmlFor="fat_amount" className={style.champ}>
          Lipide
          <input
            type="number"
            step="0.1"
            className={style.bloc}
            {...register("fat_amount", { required: true, min: 0 })}
          />
          {errors.fat_amount && (
            <span className={style.error}>Champ obligatoire</span>
          )}
        </label>
        <label htmlFor="calorie_amount" className={style.champ}>
          Calorie
          <input
            type="number"
            step="0.1"
            className={style.bloc}
            {...register("calorie_amount", { required: true, min: 0 })}
          />
          {errors.calorie_amount && (
            <span className={style.error}>Champ obligatoire</span>
          )}
        </label>
        <button type="submit" className={style.btn}>
          Ajouter
        </button>
      </form>
    </section>
  );
}
