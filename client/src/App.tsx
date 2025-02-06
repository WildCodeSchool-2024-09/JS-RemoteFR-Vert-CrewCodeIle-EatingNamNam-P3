import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainNavBar from "./components/mainNavBar/MainNavBar";

function App() {
  return (
    <>
      <MainNavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
