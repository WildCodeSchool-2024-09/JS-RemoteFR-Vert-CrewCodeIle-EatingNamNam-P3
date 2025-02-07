import { Link } from "react-router-dom";
import style from "./mainNavBar.module.css";

const MainNavBar = () => {
  return (
    <section className={style.navBar}>
      <img
        className={style.logo}
        src="/images/logo-header.png"
        alt="Logo EatingNamNam"
      />
      <Link to="/mon-profil">Mon Profil</Link>
      <Link to="/creer-recette">Créer une recette</Link>
      <Link to="/liste-recette">Toutes les recettes</Link>
      <Link to="/liste-utilisateur">Tous les utilisateurs</Link>
    </section>
  );
};

export default MainNavBar;
