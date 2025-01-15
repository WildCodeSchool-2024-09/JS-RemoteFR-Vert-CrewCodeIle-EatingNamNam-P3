import { da } from "@faker-js/faker/.";
import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

import type { RecipeType } from "../../lib/definitions";

class RecipeRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
        FROM recipe`,
    );
    return rows as RecipeType[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
        FROM recipe
        WHERE recipe.id = ?`,
      [id],
    );

    return rows[0] as RecipeType;
  }

  async update(recipe: RecipeType) {
    const [result] = await databaseClient.query<Result>(
      `UPDATE recipe
        SET title = ?, picture = ?, summary = ?, prep_time = ?, cook_time = ?, serving = ?
        WHERE id = ?`,
      [
        recipe.title,
        recipe.picture,
        recipe.summary,
        recipe.prep_time,
        recipe.cook_time,
        recipe.serving,
        recipe.id,
      ],
    );
    return result.affectedRows;
  }

  async create(recipe: Omit<RecipeType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO recipe
        (title) values (?),
        (picture) values (?)
        (summary) values (?)
        (prep_time) values (?)
        (cook_time) values (?)
        (serving) values (?)`,
      [
        recipe.title,
        recipe.picture,
        recipe.summary,
        recipe.prep_time,
        recipe.cook_time,
        recipe.serving,
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
