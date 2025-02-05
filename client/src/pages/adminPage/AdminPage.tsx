import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminNavBar from "../../components/adminNavBar/AdminNavBar";

const AdminPage = () => {
  return (
    <>
      <ToastContainer />
      <AdminNavBar />
      <Outlet />
    </>
  );
};

export default AdminPage;
