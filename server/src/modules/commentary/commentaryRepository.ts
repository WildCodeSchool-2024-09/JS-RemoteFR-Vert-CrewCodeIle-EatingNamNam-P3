import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { commentaryType } from "../../lib/definitions";

class CommentaryRepository {
  async create(commentary: Omit<commentaryType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO user_com_recipe
            (rating, com_content, com_picture, user_id, recipe_id)
            VALUES (?, ?, ?, ?, ?)`,
      [
        commentary.rating,
        commentary.com_content,
        commentary.com_picture,
        commentary.user_id,
        commentary.recipe_id,
      ],
    );
    return result.insertId;
  }

  async read() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT user_com_recipe.id, user_com_recipe.rating, user_com_recipe.com_content, user.username
      FROM user_com_recipe
      JOIN user ON user_com_recipe.user_id = user.id
      ORDER BY id DESC
      LIMIT 5
      `,
    );
    return rows as commentaryType[];
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM user_com_recipe
      WHERE recipe_id = ?`,
      [id],
    );
    return result.affectedRows;
  }
}

export default new CommentaryRepository();
