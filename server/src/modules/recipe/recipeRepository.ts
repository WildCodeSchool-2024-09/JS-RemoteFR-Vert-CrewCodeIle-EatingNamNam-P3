import { da } from "@faker-js/faker/.";
import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

import type { RecipeDataType } from "../../lib/definitions";

class RecipeRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
        FROM recipe`,
    );
    return rows as RecipeDataType[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
        FROM recipe
        WHERE recipe.id = ?`,
      [id],
    );

    return rows[0] as RecipeDataType;
  }

  async update(recipe: RecipeDataType) {
    const [result] = await databaseClient.query<Result>(
      `UPDATE recipe
        SET title = ?, picture = ?, summary = ?, prep_time = ?, cook_time = ?, serving = ?, user_id = ?
        WHERE id = ?`,
      [
        recipe.title,
        recipe.picture,
        recipe.summary,
        recipe.prep_time,
        recipe.cook_time,
        recipe.serving,
        recipe.id,
        recipe.user_id,
      ],
    );
    return result.affectedRows;
  }

  async create(recipe: Omit<RecipeDataType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO recipe
    (title, picture, summary, prep_time, cook_time, serving, user_id)
  VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        recipe.title,
        recipe.picture,
        recipe.summary,
        recipe.prep_time,
        recipe.cook_time,
        recipe.serving,
        recipe.user_id,
      ],
    );
    return result.insertId;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `DELETE
        FROM recipe
        WHERE id = ?`,
      [id],
    );

    return result.affectedRows;
  }
}

export default new RecipeRepository();
