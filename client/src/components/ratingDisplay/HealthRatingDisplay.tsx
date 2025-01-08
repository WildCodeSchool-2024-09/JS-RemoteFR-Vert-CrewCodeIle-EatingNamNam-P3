import style from "./ratingDisplay.module.css";

export default function HealthRatingDisplay() {
  return (
    <>
      {/** On affiche ici une image temporaire afin de simuler les notes*/}
      <img
        className={style.imgSample}
        src="/public/images/health-rating-sample.png"
        alt="Healthy Score"
      />
    </>
  );
}
