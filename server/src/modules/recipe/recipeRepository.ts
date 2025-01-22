import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

import type { RecipeDataType } from "../../lib/definitions";

class RecipeRepository {
  async readMostRecent() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
        FROM recipe
        ORDER BY created_at DESC
        LIMIT 3`,
    );
    return rows as RecipeDataType[];
  }
}

export default new RecipeRepository();
