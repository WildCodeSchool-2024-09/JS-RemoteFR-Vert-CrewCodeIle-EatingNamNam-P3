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
          step_order: 1,
          content: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "step",
    control,
  });

  const formSubmit: SubmitHandler<RecipeDataTypeWithoutId> = async (data) => {
    try {
      const formData = new FormData();

      formData.append("file", data.picture[0]);

      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value as string);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recipes/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Erreur lors de l'ajout de la recette.");
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section key={field.id}>
                <input
                  placeholder="order"
                  type="number"
                  {...register(`step.${index}.step_order`, {
                    min: {
                      value: 1,
                      message: "Les étapes doivent être supérieur a 1",
                    },
                    max: {
                      value: 21,
                      message: "Les étapes ne peuvent pas dépasser 21",
                    },
                  })}
                />
                {errors.step?.[index]?.step_order && (
                  <p className={style.errors}>
                    {errors.step[index]?.step_order?.message}
                  </p>
                )}
                <textarea
                  placeholder="content"
                  {...register(`step.${index}.content`, {
                    required: "Ce champ est obligatoire",
                    minLength: {
                      value: 10,
                      message:
                        "Les instructions doivent contenir 10 lettres minimum",
                    },
                    maxLength: {
                      value: 400,
                      message:
                        "Les instructions doivent contenir 400 lettres minimum",
                    },
                  })}
                />
                {errors.step?.[index]?.content && (
                  <p className={style.errors}>
                    {errors.step[index]?.content?.message}
                  </p>
                )}
                <button type="button" onClick={() => remove(index)}>
                  X
                </button>
              </section>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() =>
            append({
              step_order: 0,
              content: "",
            })
          }
        >
          Ajouter une étape
        </button>
        <label className={style.label}>
          Je choisis un titre*
          <input
            type="text"
            className={style.input}
            placeholder="Saisissez un titre"
            {...register("title", {
              required: "Champ obligatoire",
              minLength: {
                value: 3,
                message: "Ce champ doit contenir au moins 3 lettres",
              },
              maxLength: {
                value: 60,
                message: "Ce champ doit contenir moins de 60 lettres",
              },
            })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <input
          type="file"
          className="style.uploader"
          accept="image/*"
          {...register("picture")}
        />
        <label className={style.label}>
          Présentation*
          <textarea
            className={style.input}
            placeholder="Créez un résumé de votre recette, il apparaîtra sur la fiche recette."
            {...register("summary", {
              required: "Champ obligatoire",
              minLength: {
                value: 40,
                message: "Ce champ doit contenir au moins 40 lettres",
              },
              maxLength: {
                value: 255,
                message: "Ce champ doit contenir moins de 255 lettres",
              },
            })}
          />
          {errors.summary && <span>{errors.summary.message}</span>}
        </label>
        <label className={style.label}>
          Temps de préparation*
          <input
            type="number"
            className={style.input}
            {...register("prep_time", { required: "Ce champ est obligatoire" })}
          />
          {errors.prep_time && <span>{errors.prep_time.message}</span>}
        </label>
        <label className={style.label}>
          Temps de cuisson*
          <input
            type="number"
            className={style.input}
            {...register("cook_time", { required: "Ce champ est obligatoire" })}
          />
          {errors.cook_time && <span>{errors.cook_time.message}</span>}
        </label>
        <label className={style.label}>
          Nombre de parts*
          <input
            type="number"
            className={style.input}
            {...register("serving", { required: "Ce champ est obligatoire" })}
          />
          {errors.serving && <span>{errors.serving.message}</span>}
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
