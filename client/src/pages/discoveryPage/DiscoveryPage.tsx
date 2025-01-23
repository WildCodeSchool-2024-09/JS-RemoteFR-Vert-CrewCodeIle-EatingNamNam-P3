import DiscoveryHeader from "../../components/discoveryHeader/DiscoveryHeader";
import DiscoveryMain from "../../components/discoveryMain/DiscoveryMain";
import Footer from "../../components/footer/Footer";
import RegistrerPopup from "../../components/registrer/RegistrerPopup";
import style from "./discoveryPage.module.css";

export default function DiscoveryPage() {
  return (
    <body className={style.discoveryPage}>
      <DiscoveryHeader />
      <DiscoveryMain />
      <RegistrerPopup />
      <Footer />
    </body>
  );
}
