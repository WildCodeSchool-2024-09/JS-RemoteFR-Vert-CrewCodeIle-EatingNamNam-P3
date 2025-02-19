import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { RecipeDataAdminList } from "../../lib/definitions";
import { formatDate } from "../../services/dateFormatter";
import ConfirmationModal from "../modals/ConfirmationModal";
import style from "./deleteRecipeForm.module.css";

const DeleteRecipeForm = () => {
  const [recipeData, setRecipeData] = useState<RecipeDataAdminList[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [recipeIdToDelete, setRecipeIdToDelete] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/recipe-list`,
        );
        setRecipeData(response.data);
      } catch (error) {
        toast.error("Impossible de récupérer les données.");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    if (recipeIdToDelete === null) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/recipes/${recipeIdToDelete}`,
      );

      setRecipeData((previousRecipeData) =>
        previousRecipeData.filter((recipe) => recipe.id !== recipeIdToDelete),
      );

      toast.success("Recette supprimée.");
      closeModal();
    } catch (error) {
      toast.error("Impossible de supprimer la recette.");
    }
  };

  const openModal = (recipeId: number) => {
    setRecipeIdToDelete(recipeId);
    setModalOpen(true);
  };
  const closeModal = () => {
    setRecipeIdToDelete(null);
    setModalOpen(false);
  };

  return (
    <>
      <h2 className={style.title}>Gérer les recettes</h2>
      <section className={style.recipeListFrame}>
        {recipeData?.map((currentRecipeData: RecipeDataAdminList) => (
          <article className={style.recipeFrame} key={currentRecipeData.id}>
            <figure
              className={style.recipePicture}
              style={{
                backgroundImage: `url(${import.meta.env.VITE_API_URL}/${currentRecipeData.picture})`,
              }}
            />
            <ul className={style.recipeList}>
              <li className={style.recipeRow}>id {currentRecipeData.id} :</li>
              <li className={style.recipeRow}>{currentRecipeData.title}</li>
              <li className={style.recipeRow}>
                créée par {currentRecipeData.username}
              </li>
              <li className={style.recipeRow}>
                le {formatDate(currentRecipeData.created_at)}
              </li>
            </ul>
            <button
              type="button"
              className={style.deleteButton}
              onClick={() => openModal(currentRecipeData.id)}
            >
              Supprimer ?
            </button>
          </article>
        ))}
      </section>
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Êtes-vous sûr de vouloir supprimer cette recette ? Cette action est irréversible."
        onConfirm={handleDelete}
        onCancel={closeModal}
      />
    </>
  );
};

export default DeleteRecipeForm;
