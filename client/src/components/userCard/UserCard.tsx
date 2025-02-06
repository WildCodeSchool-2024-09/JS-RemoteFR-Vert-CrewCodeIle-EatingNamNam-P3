import { Link } from "react-router-dom";
import type { UserType } from "../../lib/definitions";
import style from "./userCard.module.css";

const UserCard = ({ userDataProps }: { userDataProps: UserType }) => {
  const { id, username } = userDataProps;
  return (
    <article>
      <Link to={`/liste-utilisateur/${id}`} className={style.userCard}>
        <img src="/images/avatar.png" alt="Avatar" className={style.avatar} />
        <p>{username}</p>
      </Link>
    </article>
  );
};

export default UserCard;
