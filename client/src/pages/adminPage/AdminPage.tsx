import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminNavBar from "../../components/adminNavBar/AdminNavBar";
import type { AuthType } from "../../lib/definitions";

const AdminPage = () => {
  const data = useLoaderData() as AuthType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.authentified) {
      navigate("/liste-recette");
    }
  }, [data, navigate]);

  return (
    <>
      <ToastContainer />
      <AdminNavBar />
      <Outlet />
    </>
  );
};

export default AdminPage;
