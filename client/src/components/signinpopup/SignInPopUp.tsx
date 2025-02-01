import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import type { UserType } from "../../lib/definitions";
import style from "./signInPopUp.module.css";

export default function SignInPopup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const submitLogin: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        data,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Connection reussie");
    }
  };

  return (
    <>
      <section className={style.signin}>
        <form className={style.formulaire} onSubmit={handleSubmit(submitLogin)}>
          <h2 className={style.title}>Connectez-vous</h2>
          <p className={style.text}>
            Veuillez entrer votre identifiant et votre mot de passe
          </p>
          <section className={style.champ}>
            <label htmlFor="username">
              Email
              <input
                type="text"
                className={style.bloc}
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
              />
              {errors.username && <span>{errors.username.message}</span>}
            </label>
          </section>
          <section className={style.champ}>
            <label htmlFor="password">
              Mot de passe
              <input
                type="password"
                className={style.bloc}
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
              />
              {errors.password_hash && (
                <span>{errors.password_hash.message}</span>
              )}
            </label>
          </section>
          <section className={style.btncontainer}>
            <button type="submit" className={style.btn}>
              Me Connecter
            </button>
            <p className={style.text}>
              Pas de compte ?
              <Link to="/registrerpopup" className={style.lien}>
                Créer un compte
              </Link>
            </p>
          </section>
        </form>
      </section>
    </>
  );
}
