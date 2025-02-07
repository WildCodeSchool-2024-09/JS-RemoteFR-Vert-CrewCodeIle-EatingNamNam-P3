import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import MainNavBar from "../../components/mainNavBar/MainNavBar";
import style from "./error404Page.module.css";

export default function Error404Page() {
  return (
    <>
      <MainNavBar />
      <main className={style.mainPage}>
        <h2 className={style.title}>404</h2>
        <p className={style.textA}>
          La page est introuvable... mais pas les bonnes recettes !
        </p>
        <p className={style.textB}>
          On a fouillé tous les placards, mais impossible de mettre la main sur
          cette page. Heureusement, il reste plein de bonnes choses à découvrir
          !
        </p>
        <Link to="/liste-recette" className={style.link}>
          Retour aux recettes
        </Link>
      </main>
      <Footer />
    </>
  );
}
