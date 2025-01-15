import style from "./DiscoveryHeader.module.css";

const DiscoveryHeader = () => {
  return (
    <section className={style.bgimage}>
      <div className={style.header}>
        <img
          className={style.eatIcon}
          src="favicon/image.png"
          alt="logo EatingNamNam"
        />
        <div className={style.slogan}>
          <p>Cuisinez sain, Vivez bien</p>
        </div>
        <div className={style.buttonsGroup}>
          <button className={style.button} type="button">
            Connecte toi
          </button>
          <button className={style.button} type="button">
            Crée ton compte
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryHeader;
