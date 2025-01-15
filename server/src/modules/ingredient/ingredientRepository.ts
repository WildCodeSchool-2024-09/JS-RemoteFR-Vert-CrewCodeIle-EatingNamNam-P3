import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

import type { IngredientType } from "../../lib/definitions";

class IngredientRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `
            SELECT *
            FROM ingredient`,
    );
    return rows as IngredientType[];
  }
}

export default new IngredientRepository();
