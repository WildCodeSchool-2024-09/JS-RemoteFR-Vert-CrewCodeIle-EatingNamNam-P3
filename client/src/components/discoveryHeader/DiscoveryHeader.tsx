import style from "./DiscoveryHeader.module.css";

const DiscoveryHeader = () => {
  return (
    <div className={style.header}>
      <img
        className={style.eatIcon}
        src="favicon/image.png"
        alt="logo EatingNamNam"
      />
      <p>Cuisinez saingue, Vivez biengue</p>
      <div className={style.buttonsGroup}>
        <button className={style.button} type="button">
          CONECTE TOI
        </button>
        <button className={style.button} type="button">
          CREE TON COMPTE
        </button>
      </div>
    </div>
  );
};

export default DiscoveryHeader;
