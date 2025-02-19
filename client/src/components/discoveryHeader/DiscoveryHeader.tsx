import { useState } from "react";
import RegisterPopup from "../registerpopup/RegisterPopup";
import SignInPopup from "../signinpopup/SignInPopUp";
import style from "./DiscoveryHeader.module.css";

const DiscoveryHeader = () => {
  const [isRegisterPopup, setIsRegisterPopup] = useState(false);
  const handleCloseRegister = () => {
    setIsRegisterPopup(false);
  };

  const [isSignInPopup, setIsSignInPopup] = useState(false);
  const handleCloseSignIn = () => {
    setIsSignInPopup(false);
  };
  const handleOpenRegister = () => {
    setIsSignInPopup(false);
    setIsRegisterPopup(true);
  };
  const handleOpenSignIn = () => {
    setIsRegisterPopup(false);
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
            onClick={() => setIsRegisterPopup(true)}
          >
            Crée ton compte
          </button>
          {isRegisterPopup && (
            <RegisterPopup
              closePopup={handleCloseRegister}
              openPopup={handleOpenSignIn}
            />
          )}
        </article>
      </section>
    </header>
  );
};

export default DiscoveryHeader;
