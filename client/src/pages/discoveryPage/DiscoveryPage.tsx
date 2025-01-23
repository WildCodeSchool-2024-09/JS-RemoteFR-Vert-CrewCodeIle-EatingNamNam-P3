import DiscoveryHeader from "../../components/discoveryHeader/DiscoveryHeader";
import Footer from "../../components/footer/Footer";
import style from "./discoveryPage.module.css";

export default function DiscoveryPage() {
  return (
    <body className={style.discoveryPage}>
      <DiscoveryHeader />
      <Footer />
    </body>
  );
}
