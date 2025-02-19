import axios from "axios";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { IngredientType, RecipeDataType } from "../../lib/definitions.ts";
import ImagePreview from "../imagePreview/ImagePreview.tsx";
import IngredientForm from "../ingredient/IngredientForm.tsx";
import style from "./recipeForm.module.css";

export default function RecipeForm() {
  type RecipeDataTypeWithoutId = Omit<RecipeDataType, "id">;
  const [isIngredient, setIsIngredient] = useState(false);
  const handleClose = () => {
    setIsIngredient(false);
  };
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
      recipe_ingredient: [
        {
          quantity: 1,
          label: "",
        },
      ],
    },
  });
  const [ingredientData, setIngredientData] = useState<IngredientType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/ingredients`,
          {},
        );
        setIngredientData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des ingredient, veuillez essayer ultérieurement.",
          {},
        );
      }
    };
    fetchData();
  }, []);
  const {
    fields: stepFields,
    append: stepAppend,
    remove: stepRemove,
  } = useFieldArray({
    name: "step",
    control,
  });

  const {
    fields: recipe_ingredientFields,
    append: recipe_ingredientAppend,
    remove: recipe_ingredientRemove,
  } = useFieldArray({
    name: "recipe_ingredient",
    control,
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const formSubmit: SubmitHandler<RecipeDataTypeWithoutId> = async (data) => {
    const formData = new FormData();

    formData.append("file", data.picture[0]);
    formData.append("title", data.title);
    formData.append("summary", data.summary);
    formData.append("prep_time", data.prep_time.toString());
    formData.append("cook_time", data.cook_time.toString());
    formData.append("serving", data.serving.toString());

    for (const [index, step] of Object.entries(data.step)) {
      formData.append(`step[${index}][step_order]`, step.step_order.toString());
      formData.append(`step[${index}][content]`, step.content);
    }
    for (const [index, recipe_ingredient] of Object.entries(
      data.recipe_ingredient,
    )) {
      formData.append(
        `recipe_ingredient[${index}][quantity]`,
        recipe_ingredient.quantity.toString(),
      );
      formData.append(
        `recipe_ingredient[${index}][label]`,
        recipe_ingredient.label,
      );
    }
    try {
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
    <main>
      <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
        <div>
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

          <label className={style.label}>
            Présentation*
            <textarea
              className={`${style.input} ${style.summary}`}
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
        </div>
        <div className={style.img}>
          <ImagePreview image={selectedImage} />
          <label className={style.imageUploader}>
            <input
              type="file"
              className="style.uploader"
              accept="image/*"
              {...register("picture")}
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className={style.legumes}>
          {recipe_ingredientFields.map((field, index) => {
            return (
              <div key={field.id}>
                <section key={field.id}>
                  <label className={style.quantity}>
                    <input
                      className={style.inputnumber}
                      type="number"
                      step="0.1"
                      placeholder="0.1"
                      {...register(`recipe_ingredient.${index}.quantity`, {
                        min: {
                          value: 0.1,
                          message: "quantité minimun 0.1",
                        },
                        max: {
                          value: 1000,
                          message: "quantité maximun 1000 ",
                        },
                      })}
                    />
                    {errors.recipe_ingredient?.[index]?.quantity && (
                      <p className={style.errors}>
                        {errors.recipe_ingredient[index]?.quantity?.message}
                      </p>
                    )}
                    quantité
                  </label>
                  <label>
                    Choisir un ingrédient
                    <select
                      className={style.leg}
                      {...register(`recipe_ingredient.${index}.label`, {})}
                    >
                      {ingredientData.map((ingredient) => (
                        <option key={ingredient.id} value={ingredient.id}>
                          {ingredient.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button
                    className={style.btnremove}
                    type="button"
                    onClick={() => recipe_ingredientRemove(index)}
                  >
                    X
                  </button>
                </section>
              </div>
            );
          })}
          <button
            className={style.add}
            type="button"
            onClick={() =>
              recipe_ingredientAppend({
                quantity: recipe_ingredientFields.length + 1,
                label: "",
              })
            }
          >
            Ajouter un ingredient
          </button>
          <button
            type="button"
            className={style.linking}
            onClick={() => setIsIngredient(true)}
          >
            Créer ingredient
          </button>
        </div>
        <div className={style.time}>
          <label className={style.label}>
            Temps de préparation*
            <input
              type="number"
              className={style.inputnumber}
              {...register("prep_time", {
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.prep_time && <span>{errors.prep_time.message}</span>}
          </label>
          <label className={style.label}>
            Temps de cuisson*
            <input
              type="number"
              className={style.inputnumber}
              {...register("cook_time", {
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.cook_time && <span>{errors.cook_time.message}</span>}
          </label>
          <label className={style.label}>
            Nombre de parts*
            <input
              type="number"
              className={style.inputnumber}
              {...register("serving", { required: "Ce champ est obligatoire" })}
            />
            {errors.serving && <span>{errors.serving.message}</span>}
          </label>
        </div>
        <div className={style.etape}>
          {stepFields.map((field, index) => {
            return (
              <div key={field.id}>
                <section key={field.id} className={style.content}>
                  <input
                    className={style.inputnumber}
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
                    <span className={style.errors}>
                      {errors.step[index]?.step_order?.message}
                    </span>
                  )}
                  <textarea
                    className={style.inputtext}
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
                    <span className={style.errors}>
                      {errors.step[index]?.content?.message}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => stepRemove(index)}
                    className={style.btnremove}
                  >
                    X
                  </button>
                </section>
              </div>
            );
          })}
          <button
            className={style.add}
            type="button"
            onClick={() =>
              stepAppend({
                step_order: stepFields.length + 1,
                content: "",
              })
            }
          >
            Ajouter une étape
          </button>
        </div>
        <button className={style.add} type="submit">
          Ajouter la recette
        </button>
        <span className={style.note}>* obligatoire</span>
      </form>
      <ToastContainer />
      {isIngredient && <IngredientForm closePopUp={handleClose} />}
    </main>
  );
}
