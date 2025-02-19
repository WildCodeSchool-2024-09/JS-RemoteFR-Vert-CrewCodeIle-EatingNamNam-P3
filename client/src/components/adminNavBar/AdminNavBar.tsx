import { Link } from "react-router-dom";
import style from "./adminNavBar.module.css";

export default function AdminNavBar() {
  return (
    <header className={style.container}>
      <div className={style.blur}>
        <Link to="/liste-recette" className={style.logoLink}>
          <img
            src="/images/logo-header.png"
            alt="Logo du site"
            className={style.logo}
          />
        </Link>
        <h1 className={style.title}>Tableau de bord</h1>
      </div>
      <nav className={style.navContainer}>
        <ul className={style.adminLinksList}>
          <Link to="/admin/creer-role" className={style.link}>
            Ajouter un rôle
          </Link>
          <Link to="/admin/creer-categorie" className={style.link}>
            Ajouter une catégorie
          </Link>
          <Link to="/admin/creer-diet" className={style.link}>
            Ajouter un type de régime
          </Link>
          <Link to="/admin/creer-unite" className={style.link}>
            Ajouter une unité de mesure
          </Link>
          <Link to="/admin/supprimer-recette" className={style.link}>
            Supprimer une recette
          </Link>
        </ul>
      </nav>
    </header>
  );
}
