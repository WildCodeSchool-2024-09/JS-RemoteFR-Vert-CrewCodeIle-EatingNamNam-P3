import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { CategoryType } from "../../lib/definitions";
export default function CategoryForm() {
  const { register, handleSubmit } = useForm<CategoryType>();

  const formSubmit = (newCategory: CategoryType) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/category`, newCategory)
      .then(() => {
        toast.success("bravo", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(() => {
        toast.error("Erreur lors de l'ajout de la catégorie", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="label">
          nom de la categorie
          <input
            type="text"
            {...register("label", {
              required: true,
            })}
          />
        </label>
        <button type="submit">Ajouter</button>
        <ToastContainer />
      </form>
    </section>
  );
}
