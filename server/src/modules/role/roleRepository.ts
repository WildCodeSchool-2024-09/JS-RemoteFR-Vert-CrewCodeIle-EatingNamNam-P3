import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";
import type { RoleType } from "../../lib/definitions";

class RoleRepository {
  async create(role: Omit<RoleType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO role (label)
            VALUES (?)
            `,
      [role.label],
    );

    return result.insertId;
  }
}

export default new RoleRepository();
