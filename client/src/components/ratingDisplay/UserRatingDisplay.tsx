import style from "./ratingDisplay.module.css";

export default function UserRatingDisplay() {
  return (
    <>
      {/** On affiche ici une image temporaire afin de simuler les notes*/}
      <img
        className={style.imgSample}
        src="/public/images/user-rating-sample.png"
        alt="User Rating"
      />
    </>
  );
}
