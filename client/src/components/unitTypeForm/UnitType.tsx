import axios from "axios";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { UnitTypeType } from "../../lib/definitions";
import style from "./unitType.module.css";

export default function UnitType() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UnitTypeType>();

  const formSubmit: SubmitHandler<UnitTypeType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/unittypes`,
        data,
      );
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout de l'unité de mesure'", {});
    }
  };

  return (
    <section className={style.formunit}>
      <ToastContainer />
      <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="label">
          Nom de l'unite de mesure
          <input
            className={style.bloc}
            type="text"
            {...register("label", {
              required: "Champ obligatoire",
              maxLength: {
                value: 3,
                message: "l'unité de mesure ne doit contenir que 3 caractère",
              },
            })}
          />
          {errors.label && (
            <p className={style.error}>{errors.label.message as ReactNode}</p>
          )}
        </label>
        <button type="submit" className={style.btn}>
          Ajouter
        </button>
      </form>
    </section>
  );
}
