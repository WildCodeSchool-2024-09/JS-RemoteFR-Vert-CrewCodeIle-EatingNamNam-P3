import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import type { CommentaryType } from "../../lib/definitions";

export default function Commentary() {
  const { register, handleSubmit, setValue } = useForm<CommentaryType>();
  const [rating, setRating] = useState(0);
  const handleRating = (valueStar: number) => {
    setRating(valueStar);
    setValue("rating", valueStar);
  };
  console.info(rating);
  const [comData, setComData] = useState<CommentaryType[]>([]);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/commentary
          `,
        );
        setComData(response.data);
      } catch (error) {
        toast.error("Impossible de charger les com", {});
      }
    };
    fetchData();
  }, []);

  return (
    <section>
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
        <button type="submit">Ajouter</button>
      </form>
      <div>
        {comData.length === 0 ? (
          <p>Aucun commentaire disponible.</p>
        ) : (
          comData.map((element) => (
            <div key={element.id}>
              <p>{element.com_content}</p>
              <Rating initialValue={element.rating} readonly />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
