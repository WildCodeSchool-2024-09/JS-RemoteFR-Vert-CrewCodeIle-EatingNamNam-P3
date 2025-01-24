import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
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
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout de la catégorie", {});
    }
  };

  return (
    <section className={style.formcategory}>
      <form onSubmit={handleSubmit(formSubmit)} className={style.form}>
        <label htmlFor="label">
          Nom de la catégorie
          <input
            className={style.bloc}
            type="text"
            {...register("label", {
              required: true,
              minLength: 3,
              maxLength: 20,
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
              le champ doit contenir au maximum 20 caractères
            </span>
          )}
        </label>
        <button type="submit" className={style.btn}>
          Ajouter
        </button>
        <ToastContainer />
      </form>
    </section>
  );
}
