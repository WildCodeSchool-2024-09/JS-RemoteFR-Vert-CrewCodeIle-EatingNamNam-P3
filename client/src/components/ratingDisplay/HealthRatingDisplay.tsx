import style from "./ratingDisplay.module.css";

export default function HealthRatingDisplay() {
  return (
    <div className={style.container}>
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
      <div className={style.tempIcon} />
    </div>
  );
}
