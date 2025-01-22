import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { UserType } from "../../lib/definitions";
import style from "./registrerPopup.module.css";

export default function RegistrerPopup() {
  const { register, handleSubmit } = useForm<UserType>();

  const sendData: SubmitHandler<UserType> = (data) => {
    axios.post(`${import.meta.env.VITE_API_URL}/api/users`, data);
  };

  return (
    <section className={style.registrer}>
      <form onSubmit={handleSubmit(sendData)} className={style.formulaire}>
        <div>
          <h2 className={style.title}>Inscription</h2>
        </div>
        <div className={style.champ}>
          <label htmlFor="username">Identifiant</label>
          <input
            type="text"
            {...register("username", {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="email">Adresse E-mail</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            {...register("firstname", {
              required: true,
              minLength: 2,
              maxLength: 35,
            })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="lastname">Nom de Famille</label>
          <input
            type="text"
            {...register("lastname", {
              required: true,
              minLength: 2,
              maxLength: 35,
            })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="localisation">Localisation</label>
          <input
            type="text"
            {...register("localisation", {
              required: true,
              minLength: 2,
              maxLength: 35,
            })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            {...register("profession", {
              required: true,
              minLength: 2,
              maxLength: 35,
            })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            {...register("password_hash", {
              required: true,
              minLength: 12,
              maxLength: 20,
            })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="password">Confirmer le mot de passe</label>
          <input
            type="password"
            {...register("password_hash", {
              required: true,
              minLength: 12,
              maxLength: 20,
            })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="birth_date">Date de naissance</label>
          <input
            type="date"
            {...register("birth_date", { required: true })}
            className={style.bloc}
          />
        </div>
        <div className={style.champ}>
          <label htmlFor="image">Image de profil</label>
          <input type="text" {...register("avatar")} className={style.file} />
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
