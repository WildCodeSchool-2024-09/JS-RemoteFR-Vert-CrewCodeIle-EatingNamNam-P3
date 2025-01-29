import { ToastContainer } from "react-toastify";
import DiscoveryHeader from "../../components/discoveryHeader/DiscoveryHeader";
import DiscoveryMain from "../../components/discoveryMain/DiscoveryMain";
import Footer from "../../components/footer/Footer";
import RegistrerPopup from "../../components/registrer/RegistrerPopup";
import style from "./discoveryLayout.module.css";

export default function DiscoveryLayout() {
  return (
    <body className={style.discoveryLayout}>
      <DiscoveryHeader />
      <ToastContainer />
      <DiscoveryMain />
      <RegistrerPopup />
      <Footer />
    </body>
  );
}
