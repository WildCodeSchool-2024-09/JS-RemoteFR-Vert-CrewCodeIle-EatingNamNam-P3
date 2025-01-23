import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../lib/definitions";
import style from "./registrerPopup.module.css";

export default function RegistrerPopup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserType>();

  const sendData: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users`,
        data,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Veuillez réessayer plus tard");
    }
  };

  return (
    <section className={style.registrer}>
      <form onSubmit={handleSubmit(sendData)} className={style.formulaire}>
        <div>
          <h2 className={style.title}>Inscription</h2>
        </div>
        <div className={style.champ}>
          <label htmlFor="username">
            Identifiant
            <input
              type="text"
              {...register("username", {
                required: true,
                minLength: 2,
                maxLength: 20,
              })}
              className={style.bloc}
            />
            {errors.username && errors.username.type === "required" && (
              <span>Champ obligatoire</span>
            )}
            {errors.username && errors.username.type === "minLength" && (
              <span>Caractères requis : entre 2 et 20</span>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <span>Caractères requis : entre 2 et 20</span>
            )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="email">
            Adresse E-mail
            <input
              type="email"
              {...register("email", { required: true })}
              className={style.bloc}
            />
            {errors.email && errors.email.type === "required" && (
              <span>Champ obligatoire</span>
            )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="firstname">
            Prénom
            <input
              type="text"
              {...register("firstname", {
                required: true,
                minLength: 2,
                maxLength: 35,
              })}
              className={style.bloc}
            />
            {errors.firstname && errors.firstname.type === "required" && (
              <span>Champ obligatoire</span>
            )}
            {errors.firstname && errors.firstname.type === "minLength" && (
              <span>Caractères requis : entre 2 et 35</span>
            )}
            {errors.firstname && errors.firstname.type === "maxLength" && (
              <span>Caractères requis : entre 2 et 35</span>
            )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="lastname">
            Nom de Famille
            <input
              type="text"
              {...register("lastname", {
                required: true,
                minLength: 2,
                maxLength: 35,
              })}
              className={style.bloc}
            />
            {errors.lastname && errors.lastname.type === "required" && (
              <span>Champ obligatoire</span>
            )}
            {errors.lastname && errors.lastname.type === "minLength" && (
              <span>Caractères requis : entre 2 et 35</span>
            )}
            {errors.lastname && errors.lastname.type === "maxLength" && (
              <span>Caractères requis : entre 2 et 35</span>
            )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="localisation">
            Localisation
            <input
              type="text"
              {...register("localisation", {
                required: true,
                minLength: 2,
                maxLength: 35,
              })}
              className={style.bloc}
            />
            {errors.localisation && errors.localisation.type === "required" && (
              <span>Champ obligatoire</span>
            )}
            {errors.localisation &&
              errors.localisation.type === "minLength" && (
                <span>Caractères requis : entre 2 et 35</span>
              )}
            {errors.localisation &&
              errors.localisation.type === "maxLength" && (
                <span>Caractères requis : entre 2 et 35</span>
              )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="profession">
            Profession
            <input
              type="text"
              {...register("profession", {
                required: true,
                minLength: 2,
                maxLength: 35,
              })}
              className={style.bloc}
            />
            {errors.profession && errors.profession.type === "required" && (
              <span>Champ obligatoire</span>
            )}
            {errors.profession && errors.profession.type === "minLength" && (
              <span>Caractères requis : entre 2 et 35</span>
            )}
            {errors.profession && errors.profession.type === "maxLength" && (
              <span>Caractères requis : entre 2 et 35</span>
            )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="password_hash">
            Mot de passe
            <input
              type="password"
              {...register("password_hash", {
                required: true,
                minLength: 12,
                maxLength: 20,
              })}
              className={style.bloc}
            />
            {errors.password_hash &&
              errors.password_hash.type === "required" && (
                <span>Champ obligatoire</span>
              )}
            {errors.password_hash &&
              errors.password_hash.type === "minLength" && (
                <span>Caractères requis : entre 12 et 20</span>
              )}
            {errors.password_hash &&
              errors.password_hash.type === "maxLength" && (
                <span>Caractères requis : entre 12 et 20</span>
              )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="confirmPassword">
            Confirmer le mot de passe
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                minLength: 12,
                maxLength: 20,
                validate: (value: string) => {
                  if (watch("password_hash") !== value) {
                    return "Mot de passe différent";
                  }
                },
              })}
              className={style.bloc}
            />
            {errors.password_hash &&
              errors.password_hash.type === "required" && (
                <span>Champ obligatoire</span>
              )}
            {errors.password_hash &&
              errors.password_hash.type === "minLength" && (
                <span>Caractères requis : entre 12 et 20</span>
              )}
            {errors.password_hash &&
              errors.password_hash.type === "maxLength" && (
                <span>Caractères requis : entre 12 et 20</span>
              )}
            {errors.password_hash &&
              errors.password_hash.type === "validate" && (
                <span>Les mots de passe doivent être identiques</span>
              )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="birth_date">
            Date de naissance
            <input
              type="date"
              {...register("birth_date", { required: true })}
              className={style.bloc}
            />
            {errors.password_hash &&
              errors.password_hash.type === "required" && (
                <span>Champ obligatoire</span>
              )}
          </label>
        </div>
        <div className={style.btncontainer}>
          <button type="submit" className={style.btn}>
            Je m'inscris
          </button>
          <p className={style.font}>
            Vous avez déjà un compte?
            <a href="/" className={style.lien}>
              Connectez-vous
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
