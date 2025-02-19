import "./App.css";
import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import MainNavBar from "./components/mainNavBar/MainNavBar";

function App() {
  return (
    <>
      <MainNavBar />
      <Outlet />
      <Footer />
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
}

export default App;
