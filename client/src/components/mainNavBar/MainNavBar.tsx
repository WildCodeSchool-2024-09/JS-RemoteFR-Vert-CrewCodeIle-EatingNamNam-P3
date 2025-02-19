import { Link } from "react-router-dom";
import style from "./mainNavBar.module.css";

const MainNavBar = () => {
  return (
    <header className={style.headerContainer}>
      <Link to="/admin/">
        <img
          className={style.logo}
          src="/images/logo-header.png"
          alt="Logo EatingNamNam"
        />
      </Link>
      <nav className={style.navContainer}>
        <ul className={style.linksList}>
          <Link className={style.link} to="/mon-profil">
            Mon Profil
          </Link>
          <Link className={style.link} to="/creer-recette">
            Créer une recette
          </Link>
          <Link className={style.link} to="/liste-recette">
            Toutes les recettes
          </Link>
          <Link className={style.link} to="/liste-utilisateur">
            Tous les utilisateurs
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavBar;
