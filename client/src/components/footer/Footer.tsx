import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <img
        src="/images/logo-footer.png"
        className={style.eatlogo}
        alt="Logo de la marque EatingNamNam"
      />
      <ul className={style.social}>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo-instagram.png"
              className={style.socialIcon}
              alt="Icone Instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo-linkedin.png"
              className={style.socialIcon}
              alt="Icone LinkedIn"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo-youtube.png"
              className={style.socialIcon}
              alt="Icone YouTube"
            />
          </a>
        </li>
      </ul>
      <ul className={style.fakeContacts}>
        <li>namnamager@eatingnamnam.com</li>
        <li>+331 072 061 702</li>
        <li>36 rue du Plougastel</li>
        <li>34658 Rocalambourg</li>
      </ul>
      <p className={style.textInfo}>
        Ce site est le résultat d'un projet réalisé à trois, dans le cadre de
        notre formation en développement web à la Wild Code School.
      </p>
      <p className={style.textCredits}>
        Vous pourrez suivre l'avancée de nos travaux en suivant les liens GitHub
        :
      </p>
      <ul className={style.credits}>
        <li>
          <a
            href="https://github.com/deknuydtbenjamin"
            target="_blank"
            rel="noopener noreferrer"
            className={style.creditsList}
          >
            <img
              src="images/logo-github.png"
              className={style.gitHubIcon}
              alt="Icone GitHub"
            />
            @deknuydtbenjamin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/marcoRojouan"
            target="_blank"
            rel="noopener noreferrer"
            className={style.creditsList}
          >
            <img
              src="images/logo-github.png"
              className={style.gitHubIcon}
              alt="Icone GitHub"
            />
            @marcoRojouan
          </a>
        </li>
        <li>
          <a
            href="https://github.com/victorSanLopez"
            target="_blank"
            rel="noopener noreferrer"
            className={style.creditsList}
          >
            <img
              src="images/logo-github.png"
              className={style.gitHubIcon}
              alt="Icone GitHub"
            />
            @victorSanLopez
          </a>
        </li>
      </ul>
      <p className={style.textImages}>
        Les images utilisées sur ce site proviennent de{" "}
        <a
          href="https://www.freepik.com"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          Freepik
        </a>
      </p>
      <p className={style.copyright}> &copy; Wild Code School</p>
    </footer>
  );
};

export default Footer;
