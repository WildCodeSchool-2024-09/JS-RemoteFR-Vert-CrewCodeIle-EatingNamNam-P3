import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

import type { UserType } from "../../lib/definitions";

class userRepository {
  async create(user: Omit<UserType, "id">) {
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
        2,
      ],
    );

    return result.insertId;
  }
}

export default new userRepository();
