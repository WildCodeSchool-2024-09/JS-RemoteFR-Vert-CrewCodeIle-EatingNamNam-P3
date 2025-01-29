import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { UnitTypeType } from "../../lib/definitions";

export default function UnitType() {
  const { register, handleSubmit } = useForm<UnitTypeType>();

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
    <section>
      <ToastContainer />
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="label">
          Nom de l'unite
          <input
            type="text"
            {...register("label", {
              required: "Champ obligatoire",
            })}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}
