import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

import type { UserLoginType, UserType } from "../../lib/definitions";

class userRepository {
  async create(user: Omit<UserType, "id">) {
    const userId = 2;
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO user
        (username,
    email,
    password_hash,
    avatar,
    birth_date,
    localisation,
    profession,
    firstname,
    lastname,
    role_id)
    VALUES
    (?,?,?,'/',?,?,?,?,?,?)
    `,
      [
        user.username,
        user.email,
        user.password_hash,
        user.birth_date,
        user.localisation,
        user.profession,
        user.firstname,
        user.lastname,
        userId,
      ],
    );

    return result.insertId;
  }

  async readUserName(userName: string) {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT username, password_hash
        FROM user 
        WHERE username = ?
      `,
      [userName],
    );

    return rows as UserLoginType[];
  }
}

export default new userRepository();
