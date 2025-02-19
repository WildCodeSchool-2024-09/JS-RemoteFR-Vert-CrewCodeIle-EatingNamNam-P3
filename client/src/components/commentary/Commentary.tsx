import axios from "axios";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import type { CommentaryType } from "../../lib/definitions";
import style from "./commentary.module.css";

export default function Commentary() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CommentaryType>();
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
      toast.success(response.data.message);
      setComData((prevComData) => [
        ...prevComData,
        { ...data, id: response.data.id },
      ]);
    } catch (err) {
      toast.error(
        "Impossible d'ajouter le commentaire. Veuillez réessayer plus tard.",
      );
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
        toast.error("Impossible de récupérer les données.");
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit(formSubmit)} className={style.com}>
        <label htmlFor="">
          <Rating onClick={handleRating} initialValue={rating} />
        </label>
        <label htmlFor="com_content">
          <textarea
            className={style.bloc}
            {...register("com_content", {
              required: true,
              minLength: {
                value: 5,
                message: "le commentaire doit contenir minimun 5 caractére ",
              },
              maxLength: {
                value: 255,
                message: "le commentaire doit contenir maximun 255 caractére ",
              },
            })}
          />
          {errors.com_content && (
            <p className={style.error}>
              {errors.com_content.message as ReactNode}
            </p>
          )}
        </label>
        <button type="submit" className={style.btn}>
          Ajouter
        </button>
      </form>
      <section>
        {comData.map((element) => (
          <div key={element.id} className={style.com}>
            <p className={style.username}>{element.username}</p>
            <Rating
              initialValue={element.rating}
              readonly
              className={style.rating}
            />
            <p className={style.commentaire}>{element.com_content}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
