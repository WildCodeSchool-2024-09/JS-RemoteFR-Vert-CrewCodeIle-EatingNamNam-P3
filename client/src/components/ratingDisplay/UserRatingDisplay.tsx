import style from "./ratingDisplay.module.css";

export default function UserRatingDisplay() {
  return (
    <div className={style.container}>
      {/** Je créer ici des balises div qui simulent temporairement un système de notation par images*/}
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
    </div>
  );
}
