import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import style from "./adminRoleForm.module.css";

const AdminRoleForm = () => {
  type RoleType = {
    label: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleType>();

  const handleRoleSubmit = async (newRole: RoleType) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/roles`,
        newRole,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Réessayer plus tard");
    }
  };

  return (
    <>
      <h2 className={style.title}>Créer un rôle</h2>
      <form
        className={style.formContainer}
        onSubmit={handleSubmit(handleRoleSubmit)}
      >
        <label htmlFor="label" className={style.label}>
          Nom du Rôle
          <input
            {...register("label", {
              required: true,
              minLength: 2,
              maxLength: 15,
            })}
            className={style.input}
          />
          {errors.label && errors.label.type === "required" && (
            <span>Champ obligatoire</span>
          )}
          {errors.label && errors.label.type === "minLength" && (
            <span>Caractères requis : entre 2 et 15</span>
          )}
          {errors.label && errors.label.type === "maxLength" && (
            <span>Caractères requis : entre 2 et 15</span>
          )}
        </label>
        <button type="submit" className={style.submitButton}>
          Valider
        </button>
      </form>
    </>
  );
};

export default AdminRoleForm;
