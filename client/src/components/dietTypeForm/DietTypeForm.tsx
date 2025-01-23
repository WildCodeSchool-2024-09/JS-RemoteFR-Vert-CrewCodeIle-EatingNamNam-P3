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
      <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
        <label className={style.label}>
          Je choisis un nom pour un nouveau type de régime alimentaire* :
          <input
            type="text"
            className={style.input}
            placeholder="Saisissez un nom"
            {...register("label", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.label && (
            <span>
              Ce champ est requis et doit avoir entre 3 et 30 caractères
            </span>
          )}
        </label>
        <button className={style.button} type="submit">
          Ajouter le type
        </button>
        <span className={style.note}>* obligatoire</span>
      </form>
    </>
  );
}
