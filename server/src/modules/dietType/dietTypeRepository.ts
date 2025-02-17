import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

import type { DietTypeType } from "../../lib/definitions";

class DietTypeRepository {
  async create(dietType: Omit<DietTypeType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO diet_type
    (label)
  VALUES (?)`,
      [dietType.label],
    );
    return result.insertId;
  }
}

export default new DietTypeRepository();
