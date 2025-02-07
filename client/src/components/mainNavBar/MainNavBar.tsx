import { Link } from "react-router-dom";
import style from "./mainNavBar.module.css";

const MainNavBar = () => {
  return (
    <header className={style.headerContainer}>
      <img
        className={style.eatIcon}
        src="/images/logo-header.png"
        alt="Logo EatingNamNam"
      />
      <nav>
        <Link to="/mon-profil">Mon Profil</Link>
        <Link to="/creer-recette">Créer une recette</Link>
        <Link to="/liste-recette">Toutes les recettes</Link>
        <Link to="/liste-utilisateur">Tous les utilisateurs</Link>
      </nav>
    </header>
  );
};

export default MainNavBar;
