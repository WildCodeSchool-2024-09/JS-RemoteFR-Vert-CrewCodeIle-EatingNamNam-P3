import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import style from "./adminPage.module.css";

const AdminPage = () => {
  return (
    <>
      <ToastContainer />
      <nav className={style.adminNav}>
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
      </nav>
      <Outlet />
    </>
  );
};

export default AdminPage;
