import style from "./DiscoveryHeader.module.css";

const DiscoveryHeader = () => {
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
          <button className={style.button} type="button">
            Crée ton compte
          </button>
        </article>
      </section>
    </header>
  );
};

export default DiscoveryHeader;
