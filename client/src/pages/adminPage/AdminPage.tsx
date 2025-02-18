import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
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
      <AdminNavBar />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
};

export default AdminPage;
