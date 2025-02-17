import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../lib/definitions";
import type { PopupProps } from "../../lib/definitions";
import style from "./registrerPopup.module.css";

export default function RegistrerPopup({ closePopup, openPopup }: PopupProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserType>();

  const sendData: SubmitHandler<UserType> = async (data) => {
    const { confirmPassword, ...rest } = data;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users`,
        rest,
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
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 2,
                  message: "Le pseudo doit contenir au moins 2 caratères",
                },
                maxLength: {
                  value: 20,
                  message: "Le pseudo doit contenir moins de 20 caractères",
                },
              })}
              className={style.bloc}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="email">
            Adresse E-mail
            <input
              type="email"
              {...register("email", { required: "Ce champ est obligatoire" })}
              className={style.bloc}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="firstname">
            Prénom
            <input
              type="text"
              {...register("firstname", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 2,
                  message: "Le prénom doit contenir au moins 2 caratères",
                },
                maxLength: {
                  value: 60,
                  message: "Le prénom doit contenir moins de 60 caractères",
                },
              })}
              className={style.bloc}
            />
            {errors.firstname && <span>{errors.firstname.message}</span>}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="lastname">
            Nom de Famille
            <input
              type="text"
              {...register("lastname", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 2,
                  message:
                    "Le nom de famille doit contenir au moins 2 caratères",
                },
                maxLength: {
                  value: 60,
                  message:
                    "Le nom de famille doit contenir moins de 60 caractères",
                },
              })}
              className={style.bloc}
            />
            {errors.lastname && <span>{errors.lastname.message}</span>}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="localisation">
            Localisation
            <input
              type="text"
              {...register("localisation", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 2,
                  message: "La localisation doit contenir au moins 2 caratères",
                },
                maxLength: {
                  value: 60,
                  message:
                    "La localisation doit contenir moins de 60 caractères",
                },
              })}
              className={style.bloc}
            />
            {errors.localisation && <span>{errors.localisation.message}</span>}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="profession">
            Profession
            <input
              type="text"
              {...register("profession", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 2,
                  message: "La profession doit contenir au moins 2 caratères",
                },
                maxLength: {
                  value: 100,
                  message:
                    "La profession doit contenir moins de 100 caractères",
                },
              })}
              className={style.bloc}
            />
            {errors.profession && <span>{errors.profession.message}</span>}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="password_hash">
            Mot de passe
            <input
              type="password"
              {...register("password_hash", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 12,
                  message:
                    "Le mot de passe doit contenir au moins 12 caratères",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Le mot de passe doit contenir moins de 20 caractères",
                },
              })}
              className={style.bloc}
            />
            {errors.password_hash && (
              <span>{errors.password_hash.message}</span>
            )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="confirmPassword">
            Confirmer le mot de passe
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 12,
                  message:
                    "Le mot de passe doit contenir au moins 12 caratères",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Le mot de passe doit contenir moins de 20 caractères",
                },
                validate: (value: string) => {
                  if (watch("password_hash") !== value) {
                    return "Le mot de passe saisit est différent";
                  }
                },
              })}
              className={style.bloc}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </label>
        </div>
        <div className={style.champ}>
          <label htmlFor="birth_date">
            Date de naissance
            <input
              type="date"
              {...register("birth_date", {
                required: "Ce champ est obligatoire",
              })}
              className={style.bloc}
            />
            {errors.birth_date && <span>{errors.birth_date.message}</span>}
          </label>
        </div>
        <div className={style.btncontainer}>
          <button type="submit" className={style.btn}>
            Je m'inscris
          </button>
          <p className={style.font}>
            Vous avez déjà un compte?
            <button type="button" className={style.lien} onClick={openPopup}>
              Connectez-vous
            </button>
          </p>
        </div>
        <button type="button" className={style.btnclose} onClick={closePopup}>
          Fermer
        </button>
      </form>
    </section>
  );
}
