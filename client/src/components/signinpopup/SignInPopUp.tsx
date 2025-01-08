import style from "./signInPopUp.module.css";
export default function SignInPopup() {
  return (
    <>
      <section className={style.signin}>
        <form className={style.formulaire}>
          <h2 className={style.title}>Connectez-vous</h2>
          <p className={style.text}>
            Veuillez entrer votre e-mail et votre mot de passe
          </p>
          <div className={style.champ}>
            <label htmlFor="mail">E-mail</label>
            <input type="email" required className={style.bloc} />
          </div>
          <div className={style.champ}>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" required className={style.bloc} />
          </div>
          <div className={style.btncontainer}>
            <button type="submit" className={style.btn}>
              Se Connecter
            </button>
            <p className={style.text}>
              Pas de compte?
              <a href="/" className={style.lien}>
                Créer un compte
              </a>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
