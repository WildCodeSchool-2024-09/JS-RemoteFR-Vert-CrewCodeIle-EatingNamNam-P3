import axios from "axios";
import { useForm } from "react-hook-form";
import type { CategoryType } from "../../lib/definitions";

export default function CategoryForm() {
  const { register, handleSubmit } = useForm<CategoryType>();

  const formSubmit = (newCategory: CategoryType) => {
    axios.post(`${import.meta.env.VITE_API_URL}/api/category`, newCategory);
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
      </form>
    </section>
  );
}
