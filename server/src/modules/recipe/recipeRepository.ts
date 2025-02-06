import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

import type { RecipeDataType } from "../../lib/definitions";

class RecipeRepository {
  async readMostRecent() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT recipe.*, user.username
        FROM recipe
        JOIN user ON recipe.user_id = user.id
        ORDER BY created_at DESC
        LIMIT 3`,
    );

    return rows as RecipeDataType[];
  }

  async readForAdmin() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT r.id, r.title, r.created_at, u.username
      FROM recipe AS r
      JOIN user AS u ON r.user_id = u.id
      ORDER BY created_at DESC`,
    );

    return rows as RecipeDataType[];
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT recipe.*, user.username
      FROM recipe
      JOIN user ON recipe.user_id = user.id
      ORDER BY created_at DESC`,
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

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM recipe
      WHERE id = ?`,
      [id],
    );

    return result.affectedRows;
  }
}

export default new RecipeRepository();
