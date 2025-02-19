import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { CategoryType } from "../../lib/definitions";
import style from "./category.module.css";

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryType>();

  const formSubmit: SubmitHandler<CategoryType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/category`,
        data,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Erreur lors de l'ajout de la catégorie");
    }
  };

  return (
    <>
      <h2 className={style.title}>Créer une nouvelle catégorie</h2>
      <form className={style.formContainer} onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="label" className={style.label}>
          Nom de la catégorie
          <input
            type="text"
            placeholder="Petit-déjeuner, boissons, apéro entre amis..."
            {...register("label", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            className={style.input}
          />
          {errors.label && errors.label.type === "required" && (
            <span>Champ obligatoire</span>
          )}
          {errors.label && errors.label.type === "minLength" && (
            <span>le champ doit contenir au minimum 3 caractères</span>
          )}
          {errors.label && errors.label.type === "maxLength" && (
            <span>le champ doit contenir au maximum 20 caractères</span>
          )}
        </label>
        <button type="submit" className={style.submitButton}>
          Valider
        </button>
      </form>
    </>
  );
}
