import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const AdminRoleForm = () => {
  type RoleType = {
    label: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleType>();

  const handleRoleSubmit = (newRole: RoleType) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/roles`, newRole)
      .then(() =>
        toast.success("Role créé", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }),
      )
      .catch(() =>
        toast.error("Erreur", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }),
      );
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(handleRoleSubmit)}>
        <label htmlFor="label">
          Nom du Rôle
          <input
            {...register("label", {
              required: true,
              minLength: 2,
              maxLength: 15,
            })}
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
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AdminRoleForm;
