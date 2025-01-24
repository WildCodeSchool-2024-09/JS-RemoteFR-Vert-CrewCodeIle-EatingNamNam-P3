import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { AddIngredientData } from "../../lib/definitions";
import style from "./ingredient.module.css";

export default function IngredientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddIngredientData>();

  const formSubmit: SubmitHandler<AddIngredientData> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ingredients`,
        data,
      );
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout de l'ingrédient", {});
    }
  };

  return (
    <section className={style.formingredient}>
      <ToastContainer />
      <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
        <h2 className={style.title}>Ajouter un Ingrédient</h2>
        <label htmlFor="label" className={style.champ}>
          Nom de l'ingrédient
          <input
            type="text"
            className={style.bloc}
            {...register("label", {
              required: true,
              minLength: 3,
              maxLength: 60,
            })}
          />
          {errors.label && errors.label.type === "required" && (
            <span className={style.error}>Champ obligatoire</span>
          )}
          {errors.label && errors.label.type === "minLength" && (
            <span className={style.error}>
              le champ doit contenir au minimum 3 caractères
            </span>
          )}
          {errors.label && errors.label.type === "maxLength" && (
            <span className={style.error}>
              le champ doit contenir au maximun 60 caractères
            </span>
          )}
        </label>
        <label htmlFor="protein_amount" className={style.champ}>
          Proteine
          <input
            type="number"
            step="0.1"
            placeholder="0.1"
            className={style.bloc}
            {...register("protein_amount", {
              required: true,
              min: 0,
              max: 100,
            })}
          />
          {errors.protein_amount &&
            errors.protein_amount.type === "required" && (
              <span className={style.error}>Champ obligatoire</span>
            )}
          {errors.protein_amount && errors.protein_amount.type === "min" && (
            <span className={style.error}>
              Le nombre ne peut pas être négatif
            </span>
          )}
          {errors.protein_amount && errors.protein_amount.type === "max" && (
            <span className={style.error}>
              La valeur ne doit pas excéder 100
            </span>
          )}
        </label>
        <label htmlFor="carb_amount" className={style.champ}>
          Glucide
          <input
            step="0.1"
            type="number"
            placeholder="0.1"
            className={style.bloc}
            {...register("carb_amount", { required: true, min: 0, max: 100 })}
          />
          {errors.carb_amount && errors.carb_amount.type === "required" && (
            <span className={style.error}>Champ obligatoire</span>
          )}
          {errors.carb_amount && errors.carb_amount.type === "min" && (
            <span className={style.error}>
              Le nombre ne peut pas être négatif
            </span>
          )}
          {errors.carb_amount && errors.carb_amount.type === "max" && (
            <span className={style.error}>
              La valeur ne doit pas excéder 100
            </span>
          )}
        </label>
        <label htmlFor="fat_amount" className={style.champ}>
          Lipide
          <input
            type="number"
            step="0.1"
            placeholder="0.1"
            className={style.bloc}
            {...register("fat_amount", { required: true, min: 0, max: 100 })}
          />
          {errors.fat_amount && errors.fat_amount.type === "required" && (
            <span className={style.error}>Champ obligatoire</span>
          )}
          {errors.fat_amount && errors.fat_amount.type === "min" && (
            <span className={style.error}>
              Le nombre ne peut pas être négatif
            </span>
          )}
          {errors.fat_amount && errors.fat_amount.type === "max" && (
            <span className={style.error}>
              La valeur ne doit pas excéder 100
            </span>
          )}
        </label>
        <label htmlFor="calorie_amount" className={style.champ}>
          Calorie
          <input
            type="number"
            step="0.1"
            placeholder="0.1"
            className={style.bloc}
            {...register("calorie_amount", {
              required: true,
              min: 0,
              max: 999,
            })}
          />
          {errors.calorie_amount &&
            errors.calorie_amount.type === "required" && (
              <span className={style.error}>Champ obligatoire</span>
            )}
          {errors.calorie_amount && errors.calorie_amount.type === "min" && (
            <span className={style.error}>
              Le nombre ne peut pas être négatif
            </span>
          )}
          {errors.calorie_amount && errors.calorie_amount.type === "max" && (
            <span className={style.error}>
              La valeur ne doit pas excéder 999
            </span>
          )}
        </label>
        <button type="submit" className={style.btn}>
          Ajouter
        </button>
      </form>
    </section>
  );
}
