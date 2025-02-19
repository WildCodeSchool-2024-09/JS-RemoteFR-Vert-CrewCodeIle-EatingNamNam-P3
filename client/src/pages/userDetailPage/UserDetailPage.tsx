import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import type { RecipeDataType, UserType } from "../../lib/definitions";
import style from "./userDetailPage.module.css";

const UserDetailPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<UserType | null>(null);
  const [recipeData, setRecipeData] = useState<RecipeDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users/${id}`,
        );
        setUserData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
          {},
        );
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/user/${id}`,
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
          {},
        );
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className={style.userDetail}>
      <section className={style.userInfo}>
        <img src="/images/avatar.png" alt="avatar" />
        <h2 className={style.userName}>{userData?.username}</h2>
        <div className={style.userDescription}>
          <p>{userData?.localisation}</p>
          <p>{userData?.profession}</p>
        </div>
      </section>

      <section className={style.userRecipeContainer}>
        <h3 className={style.recipeTitle}>Recette publiées</h3>
        <article className={style.userRecipe}>
          {recipeData?.map((element: RecipeDataType) => (
            <RecipeCard key={element.id} recipeDataProps={element} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default UserDetailPage;
