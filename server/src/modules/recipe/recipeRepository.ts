import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

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

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT r.*, u.username
      FROM recipe AS r
      JOIN user AS u ON r.user_id = u.id
      WHERE r.id = ?`,
      [id],
    );

    return rows[0] as RecipeDataType;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT title, user_id, prep_time, cook_time, summary
        FROM recipe
      `,
    );
    return rows as RecipeDataType[];
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
        1,
      ],
    );

    return result.insertId;
  }
}

export default new RecipeRepository();
