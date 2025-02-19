import { Slide, ToastContainer } from "react-toastify";
import DiscoveryHeader from "../../components/discoveryHeader/DiscoveryHeader";
import DiscoveryMain from "../../components/discoveryMain/DiscoveryMain";
import Footer from "../../components/footer/Footer";
import style from "./discoveryLayout.module.css";

export default function DiscoveryLayout() {
  return (
    <body className={style.discoveryLayout}>
      <DiscoveryHeader />
      <DiscoveryMain />
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
    </body>
  );
}
