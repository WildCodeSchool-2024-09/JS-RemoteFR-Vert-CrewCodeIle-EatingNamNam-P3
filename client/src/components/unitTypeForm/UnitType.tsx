import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
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
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Impossible de récupérer les données.");
    }
  };

  return (
    <>
      <h2 className={style.title}>Créer une nouvelle unité de mesure</h2>
      <form className={style.formContainer} onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="label" className={style.label}>
          Nom de l'unité de mesure
          <input
            type="text"
            placeholder="g, cl, u..."
            {...register("label", {
              required: "Champ obligatoire",
              maxLength: {
                value: 3,
                message: "l'unité de mesure ne doit contenir que 3 caractères",
              },
            })}
            className={style.input}
          />
          {errors.label && errors.label.type === "required" && (
            <span>Champ obligatoire</span>
          )}
        </label>
        <button type="submit" className={style.submitButton}>
          Valider
        </button>
      </form>
    </>
  );
}
