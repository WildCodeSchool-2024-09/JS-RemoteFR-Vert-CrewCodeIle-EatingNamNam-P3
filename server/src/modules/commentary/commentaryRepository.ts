import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
import type { commentaryType } from "../../lib/definitions";

class CommentaryRepository {
  async create(commentary: Omit<commentaryType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO user_com_recipe
            (rating, com_content, com_picture, user_id, recipe_id)
            VALUES (?, ?, ?, ?, ?)`,
      [commentary.rating, commentary.com_content, commentary.com_picture, 1, 1],
    );
    return result.insertId;
  }
}

export default new CommentaryRepository();
