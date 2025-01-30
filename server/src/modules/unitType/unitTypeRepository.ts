import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

import type { UnitTypeType } from "../../lib/definitions";

class UnitTypeRepository {
  async create(unitType: Omit<UnitTypeType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO unit_type
    (label)
  VALUES (?)`,
      [unitType.label],
    );
    return result.insertId;
  }
}

export default new UnitTypeRepository();
