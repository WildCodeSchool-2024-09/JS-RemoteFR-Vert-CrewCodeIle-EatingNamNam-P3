import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <section className={style.main}>
      <div className={style.logo}>
        <img src="images/logo_white.png" alt="" />
        <div className={style.social}>
          <Link to="" className={style.icon}>
            <img src="images/logo-instagram.png" alt="" />
          </Link>
          <Link to="" className={style.icon}>
            <img src="images/logo-linkedin.png" alt="" />
          </Link>
          <Link to="" className={style.icon}>
            <img src="images/logo-youtube.png" alt="" />
          </Link>
        </div>
      </div>
      <div>
        <h3>Contact :</h3>
        <p>eatnamnam.namager@gmail.com</p>
        <p>06-56-09-09-09.1</p>
      </div>
      <div>
        <h3>Mentions :</h3>
        <p>CLUF</p>
        <p>Conditions Générales d'Utilisation</p>
      </div>
      <div>
        <h3>Mentions :</h3>
        <p>CLUF</p>
        <p>Conditions Générales d'Utilisation</p>
      </div>
    </section>
  );
};

export default Footer;
