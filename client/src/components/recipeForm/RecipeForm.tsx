import axios from "axios";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { IngredientType, RecipeDataType } from "../../lib/definitions.ts";
import { recipeValidation } from "../../validations/recipeFormValidation.ts";
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
          withCredentials: true,
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
        <label className={style.label}>
          Je choisis un titre*
          <input
            type="text"
            className={style.input}
            placeholder="Salade de quinoa aux légumes grillés"
            {...register("title", recipeValidation.title)}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <label className={style.imageUploader}>
          Je choisis une image
          <input
            type="file"
            className="style.uploader"
            accept="image/*"
            {...register("picture")}
            onChange={handleImageChange}
          />
        </label>
        <ImagePreview image={selectedImage} />
        <label className={style.label}>
          Présentation*
          <textarea
            className={`${style.input} ${style.summary}`}
            placeholder="Salade de quinoa avec légumes grillés, assaisonnée d'huile d'olive et de citron. Simple et savoureuse !"
            {...register("summary", recipeValidation.summary)}
          />
          {errors.summary && <span>{errors.summary.message}</span>}
        </label>
        {recipe_ingredientFields.map((field, index) => {
          return (
            <div key={field.id}>
              <section key={field.id}>
                <label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="0.1"
                    {...register(
                      `recipe_ingredient.${index}.quantity`,
                      recipeValidation.quantity,
                    )}
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
                  <select {...register(`recipe_ingredient.${index}.label`, {})}>
                    {ingredientData.map((ingredient) => (
                      <option key={ingredient.id} value={ingredient.id}>
                        {ingredient.label}
                      </option>
                    ))}
                  </select>
                </label>
                <button
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
        <button type="button" onClick={() => setIsIngredient(true)}>
          créer ingredient
        </button>
        <label className={style.label}>
          Temps de préparation*
          <input
            type="number"
            className={style.input}
            {...register("prep_time", recipeValidation.prep_time)}
          />
          {errors.prep_time && <span>{errors.prep_time.message}</span>}
        </label>
        <label className={style.label}>
          Temps de cuisson*
          <input
            type="number"
            className={style.input}
            {...register("cook_time", recipeValidation.prep_time)}
          />
          {errors.prep_time && <span>{errors.prep_time.message}</span>}
        </label>
        <label className={style.label}>
          Nombre de parts*
          <input
            type="number"
            className={style.input}
            {...register("serving", recipeValidation.prep_time)}
          />
          {errors.prep_time && <span>{errors.prep_time.message}</span>}
        </label>
        {stepFields.map((field, index) => {
          return (
            <div key={field.id}>
              <section key={field.id}>
                <input
                  placeholder="order"
                  type="number"
                  {...register(
                    `step.${index}.step_order`,
                    recipeValidation.step_order,
                  )}
                />
                {errors.step?.[index]?.step_order && (
                  <p className={style.errors}>
                    {errors.step[index]?.step_order?.message}
                  </p>
                )}
                <textarea
                  placeholder="Coupez les légumes en morceaux ..."
                  {...register(
                    `step.${index}.content`,
                    recipeValidation.content,
                  )}
                />
                {errors.step?.[index]?.content && (
                  <p className={style.errors}>
                    {errors.step[index]?.content?.message}
                  </p>
                )}
                <button type="button" onClick={() => stepRemove(index)}>
                  X
                </button>
              </section>
            </div>
          );
        })}
        <button
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
        <button className={style.button} type="submit">
          Ajouter la recette
        </button>
        <span className={style.note}>* obligatoire</span>
      </form>
      <ToastContainer />
      {isIngredient && <IngredientForm closePopUp={handleClose} />}
    </>
  );
}
