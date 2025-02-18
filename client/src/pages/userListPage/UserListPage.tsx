import axios from "axios";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-toastify";
import UserCard from "../../components/userCard/UserCard";
import type { UserType } from "../../lib/definitions";
import style from "./userListPage.module.css";

const UserListPage = () => {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [userData, setUserData] = useState<UserType[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = event.target as HTMLFormElement;
    const textInput = data.elements[0] as HTMLInputElement;
    setCurrentSearch(textInput.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users`,
          {
            params: currentSearch ? { q: currentSearch.toLowerCase() } : {},
          },
        );
        setUserData(response.data);
      } catch (error) {
        toast.error("Impossible de récupérer les données.");
      }
    };
    fetchData();
  }, [currentSearch]);

  return (
    <main className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Recherche un utilisateur"
        />
        <button className={style.searchButton} type="submit">
          <img src="/images/loupe-recherche.png" alt="boutton de recherche" />
        </button>
      </form>
      <section className={style.userList}>
        {userData?.map((element: UserType) => (
          <UserCard key={element.id} userDataProps={element} />
        ))}
      </section>
    </main>
  );
};

export default UserListPage;
