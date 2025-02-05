import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AdminPage = () => {
  return (
    <>
      <ToastContainer />
      <Link to="/admin/creer-role">Role</Link>
      <Link to="/admin/creer-categorie">Categorie</Link>
      <Link to="/admin/creer-diet">Type de Diet</Link>
      <Link to="/admin/creer-unite">Unités de Mesure</Link>
      <Outlet />
    </>
  );
};

export default AdminPage;
