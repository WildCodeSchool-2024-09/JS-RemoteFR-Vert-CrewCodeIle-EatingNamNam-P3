import axios from "axios";
import { useForm } from "react-hook-form";

const AddRole = () => {
  type RoleType = {
    label: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleType>();

  const handleRoleSubmit = (newRole: RoleType) => {
    axios.post(`${import.meta.env.VITE_API_URL}/api/roles`, newRole);
  };

  return (
    <div>
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

export default AddRole;
