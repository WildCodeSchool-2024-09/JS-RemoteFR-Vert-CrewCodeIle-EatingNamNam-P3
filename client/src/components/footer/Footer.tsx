import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <section className={style.main}>
          <section className={style.logos}>
            <img src="images/logo_white.png" className={style.eatlogo} alt="" />
            <article className={style.social}>
              <Link to="https://instagram.com/">
                <img
                  src="images/logo-instagram.png"
                  className={style.icon}
                  alt=""
                />
              </Link>
              <Link to="https://www.linkedin.com/">
                <img
                  src="images/logo-linkedin.png"
                  className={style.icon}
                  alt=""
                />
              </Link>
              <Link to="https://www.youtube.com/">
                <img
                  src="images/logo-youtube.png"
                  className={style.icon}
                  alt=""
                />
              </Link>
            </article>
          </section>
          <section className={style.footertext}>
            <article className={style.contact}>
              <h3>Contact :</h3>
              <p>eatnamnam.namager@gmail.com</p>
              <p>06-56-09-09-09.1</p>
            </article>
            <article className={style.mention}>
              <h3>Mentions :</h3>
              <p>CLUF</p>
              <p>Conditions Générales d'Utilisation</p>
            </article>
            <article className={style.adress}>
              <h3>Adresse :</h3>
              <p>36 rue du Plougastel</p>
              <p>34658 Rocalambourd</p>
            </article>
          </section>
        </section>
        <p className={style.copyright}> &copy; Wild Code School</p>
      </footer>
    </>
  );
};

export default Footer;
