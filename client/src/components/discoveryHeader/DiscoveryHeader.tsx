import { useState } from "react";
import RegistrerPopup from "../registrer/RegistrerPopup";
import SignInPopup from "../signinpopup/SignInPopUp";
import style from "./DiscoveryHeader.module.css";

const DiscoveryHeader = () => {
  const [isRegistrerPopup, setIsRegistrerPopup] = useState(false);
  const handleCloseRegistrer = () => {
    setIsRegistrerPopup(false);
  };

  const [isSignInPopup, setIsSignInPopup] = useState(false);
  const handleCloseSignIn = () => {
    setIsSignInPopup(false);
  };
  const handleOpenRegister = () => {
    setIsSignInPopup(false);
    setIsRegistrerPopup(true);
  };
  const handleOpenSignIn = () => {
    setIsRegistrerPopup(false);
    setIsSignInPopup(true);
  };
  return (
    <header className={style.bgimage}>
      <section className={style.header}>
        <img
          className={style.eatIcon}
          src="/images/logo-header.png"
          alt="logo EatingNamNam"
        />
        <article className={style.slogan}>
          <p>Cuisinez sain, Vivez bien</p>
        </article>
        <article className={style.buttonsGroup}>
          <button
            className={style.button}
            type="button"
            onClick={() => setIsSignInPopup(true)}
          >
            Connecte toi
          </button>
          {isSignInPopup && (
            <SignInPopup
              closePopup={handleCloseSignIn}
              openPopup={handleOpenRegister}
            />
          )}
          <button
            className={style.button}
            type="button"
            onClick={() => setIsRegistrerPopup(true)}
          >
            Crée ton compte
          </button>
          {isRegistrerPopup && (
            <RegistrerPopup
              closePopup={handleCloseRegistrer}
              openPopup={handleOpenSignIn}
            />
          )}
        </article>
      </section>
    </header>
  );
};

export default DiscoveryHeader;
