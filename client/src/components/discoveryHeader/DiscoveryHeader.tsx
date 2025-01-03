import style from "./DiscoveryHeader.module.css";

const DiscoveryHeader = () => {
  return (
    <div className={style.header}>
      <p>Cuisinez saingue, Vivez biengue</p>
      <button type="button">CONECTE TOI</button>
      <button type="button">CREE TON COMPTE</button>
    </div>
  );
};

export default DiscoveryHeader;
