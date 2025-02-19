import axios from "axios";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type {
  AddIngredientData,
  IngredientPopupProps,
} from "../../lib/definitions";
import style from "./ingredient.module.css";

export default function IngredientForm({ closePopUp }: IngredientPopupProps) {
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
        { withCredentials: true },
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Impossible de créer l'ingrédient. Réessayez plus tard.");
    }
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
            {...register("label", {
              required: "Le nom de l'ingrédient est obligatoire",
              minLength: {
                value: 3,
                message:
                  "le nom de l'ingredient doit contenir entre 3 et 60 caractères ",
              },
              maxLength: {
                value: 100,
                message:
                  "le nom de l'ingredient doit contenir entre 3 et 60 caractères ",
              },
            })}
          />
          {errors.label && (
            <p className={style.error}>{errors.label.message as ReactNode}</p>
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
              required: "champ obligatoire",
              min: {
                value: 0,
                message: "Le nombre ne peut pas être négatif",
              },
              max: {
                value: 100,
                message: "Le nombre ne doit pas être superieur a 100",
              },
            })}
          />
          {errors.protein_amount && (
            <p className={style.error}>
              {errors.protein_amount.message as ReactNode}
            </p>
          )}
        </label>
        <label htmlFor="carb_amount" className={style.champ}>
          Glucide
          <input
            step="0.1"
            type="number"
            placeholder="0.1"
            className={style.bloc}
            {...register("carb_amount", {
              required: "Champ obligatoire",
              min: {
                value: 0,
                message: "Le nombre ne peut pas être négatif",
              },
              max: {
                value: 100,
                message: "Le nombre ne doit pas être superieur a 100",
              },
            })}
          />
          {errors.carb_amount && (
            <p className={style.error}>
              {errors.carb_amount.message as ReactNode}
            </p>
          )}
        </label>
        <label htmlFor="fat_amount" className={style.champ}>
          Lipide
          <input
            type="number"
            step="0.1"
            placeholder="0.1"
            className={style.bloc}
            {...register("fat_amount", {
              required: "Champ obligatoire",
              min: {
                value: 0,
                message: "Le nombre ne peut pas être négatif",
              },
              max: {
                value: 100,
                message: "Le nombre ne doit pas être superieur a 100",
              },
            })}
          />
          {errors.fat_amount && (
            <p className={style.error}>
              {errors.fat_amount.message as ReactNode}
            </p>
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
              required: "Champ obligatoire",
              min: {
                value: 0,
                message: "Le nombre ne peut pas être négatif",
              },
              max: {
                value: 999,
                message: "Le nombre ne doit pas être superieur a 999",
              },
            })}
          />
          {errors.calorie_amount && (
            <p className={style.error}>
              {errors.calorie_amount.message as ReactNode}
            </p>
          )}
        </label>
        <button type="submit" className={style.btn}>
          Ajouter
        </button>
        <button type="button" onClick={closePopUp}>
          Fermer
        </button>
      </form>
    </section>
  );
}
