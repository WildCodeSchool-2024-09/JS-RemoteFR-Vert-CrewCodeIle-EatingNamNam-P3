import { useState } from "react";
import RegistrerPopup from "../registrer/RegistrerPopup";
import style from "./DiscoveryHeader.module.css";

const DiscoveryHeader = () => {
  const [isRegistrerPopup, setIsRegistrerPopup] = useState(false);
  const handleCloseRegistrer = () => {
    setIsRegistrerPopup(false);
  };
  return (
    <header className={style.bgimage}>
      <section className={style.header}>
        <img
          className={style.eatIcon}
          src="favicon/image.png"
          alt="logo EatingNamNam"
        />
        <article className={style.slogan}>
          <p>Cuisinez sain, Vivez bien</p>
        </article>
        <article className={style.buttonsGroup}>
          <button className={style.button} type="button">
            Connecte toi
          </button>
          <button
            className={style.button}
            type="button"
            onClick={() => setIsRegistrerPopup(true)}
          >
            Crée ton compte
          </button>
          {isRegistrerPopup && (
            <RegistrerPopup closePopupRegistre={handleCloseRegistrer} />
          )}
        </article>
      </section>
    </header>
  );
};

export default DiscoveryHeader;
