import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { RecipeDataType } from "../../lib/definitions.ts";
import style from "./recipeForm.module.css";

export default function RecipeForm() {
  type RecipeDataTypeWithoutId = Omit<RecipeDataType, "id">;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RecipeDataTypeWithoutId>({
    defaultValues: {
      step: [
        {
          step_order: +1,
          content: "",
        },
      ],
    },
  });

  const { fields } = useFieldArray({
    name: "step",
    control,
  });

  const formSubmit: SubmitHandler<RecipeDataTypeWithoutId> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recipes/`,
        data,
      );
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout de la recette", {});
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <input
                placeholder="order"
                type="number"
                {...register(`step.${index}.step_order`, {
                  required: true,
                })}
              />
              <textarea
                placeholder="content"
                {...register(`step.${index}.content`, {
                  required: true,
                  minLength: 10,
                  maxLength: 255,
                })}
              />
            </div>
          );
        })}
        <label className={style.label}>
          Je choisis un titre*
          <input
            type="title"
            className={style.input}
            placeholder="Saisissez un titre"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 60,
            })}
          />
          {errors.title && errors.title.type === "required" && (
            <span>Champ obligatoire</span>
          )}
          {errors.title && errors.title.type === "minLength" && (
            <span>Le titre doit avoir au moins 3 caractères</span>
          )}
          {errors.title && errors.title.type === "maxLength" && (
            <span>Le titre ne peut excéder 60 caractères</span>
          )}
        </label>
        <label className={style.label}>
          Image
          <input
            type="text"
            className={style.input}
            placeholder="Insérez l'URL d'une image"
          />
        </label>
        <label className={style.label}>
          Présentation*
          <input
            type="text"
            className={style.input}
            placeholder="Créez un résumé de votre recette, il apparaîtra sur la fiche recette."
            {...register("summary", {
              required: true,
              minLength: 40,
              maxLength: 255,
            })}
          />
          {errors.summary && errors.summary.type === "required" && (
            <span>Champ obligatoire</span>
          )}
          {errors.summary && errors.summary.type === "minLength" && (
            <span>Le résumé doit dépasser les 40 caractères.</span>
          )}
          {errors.summary && errors.summary.type === "maxLength" && (
            <span>Le résumé ne doit pas excéder 255 caractères.</span>
          )}
        </label>
        <label className={style.label}>
          Temps de préparation*
          <input
            type="prep_time"
            className={style.input}
            {...register("prep_time", { required: true })}
          />
          {errors.prep_time && <span>Champ obligatoire</span>}
        </label>
        <label className={style.label}>
          Temps de cuisson*
          <input
            type="cook_time"
            className={style.input}
            {...register("cook_time", { required: true })}
          />
          {errors.cook_time && <span>Champ obligatoire</span>}
        </label>
        <label className={style.label}>
          Nombre de parts*
          <input
            type="serving"
            className={style.input}
            {...register("serving", { required: true })}
          />
          {errors.serving && <span>Champ obligatoire</span>}
        </label>
        <button className={style.button} type="submit">
          Ajouter la recette
        </button>
        <span className={style.note}>* obligatoire</span>
      </form>
      <ToastContainer />
    </>
  );
}
