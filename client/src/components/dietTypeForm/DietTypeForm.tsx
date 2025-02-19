import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { DietTypeType } from "../../lib/definitions.ts";
import style from "./dietTypeForm.module.css";

export default function DietTypeForm() {
  type DietTypeTypeWithoutId = Omit<DietTypeType, "id">;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DietTypeTypeWithoutId>();

  const formSubmit = async (data: DietTypeTypeWithoutId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/dietTypes/`,
        data,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Une erreur est survenue.");
    }
  };

  return (
    <>
      <ToastContainer />
      <h2 className={style.title}>Créer un nouveau type de régime</h2>
      <form className={style.formContainer} onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="label" className={style.label}>
          Nom du type de régime :
          <input
            type="text"
            placeholder="Vegan, sans gluten, pescétarien..."
            {...register("label", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
            className={style.input}
          />
          {errors.label && (
            <span>
              Ce champ est requis et doit avoir entre 3 et 30 caractères
            </span>
          )}
        </label>
        <button type="submit" className={style.submitButton}>
          Ajouter le type
        </button>
      </form>
    </>
  );
}
