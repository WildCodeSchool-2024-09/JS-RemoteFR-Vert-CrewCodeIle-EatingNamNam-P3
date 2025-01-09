import { Link } from "react-router-dom";
import style from "./signInPopUp.module.css";
export default function SignInPopup() {
  return (
    <>
      <section className={style.signin}>
        <form className={style.formulaire}>
          <h2 className={style.title}>Connectez-vous</h2>
          <p className={style.text}>
            Veuillez entrer votre identifiant et votre mot de passe
          </p>
          <section className={style.champ}>
            <label htmlFor="email">Email</label>
            <input type="email" required className={style.bloc} />
          </section>
          <section className={style.champ}>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" required className={style.bloc} />
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
