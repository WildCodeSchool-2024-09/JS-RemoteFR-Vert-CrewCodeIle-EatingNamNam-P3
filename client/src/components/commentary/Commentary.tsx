import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { ToastContainer, toast } from "react-toastify";
import type { CommentaryType } from "../../lib/definitions";

export default function Commentary() {
  const { register, handleSubmit, setValue } = useForm<CommentaryType>();
  const [rating, setRating] = useState(0);
  const handleRating = (valueStar: number) => {
    setRating(valueStar);
    setValue("rating", valueStar);
  };
  console.info(rating);

  const formSubmit: SubmitHandler<CommentaryType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/commentary`,
        data,
      );
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout du commentaire", {});
    }
  };

  return (
    <section>
      <ToastContainer />
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="">
          <Rating onClick={handleRating} initialValue={rating} />
        </label>
        <label htmlFor="com_content">
          <textarea
            {...register("com_content", {
              required: true,
            })}
          />
        </label>
        <label htmlFor="">
          <input type="file" />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}
