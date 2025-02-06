import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { StepType } from "../../lib/definitions";

class StepRepository {
  async read(recipeId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
      FROM step
      WHERE recipe_id = ?`,
      [recipeId],
    );

    return rows as StepType[];
  }

  async create(step: Omit<StepType, "id">) {
    const { step_order, content, recipe_id } = step;
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO step 
            (content, step_order, recipe_id)
            VALUES
            ( ? , ? , ? )`,
      [content, step_order, recipe_id],
    );

    return result.insertId;
  }
}

export default new StepRepository();
