import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { RecipeType } from "../../lib/definition";

class RecipeRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from recipe");

    return rows as RecipeType[];
  }
}

export default new RecipeRepository();
