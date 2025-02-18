import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { RecipeIngredientType } from "../../lib/definitions";

class RecipeIngredientRepository {
  async create(recipeIngredient: Omit<RecipeIngredientType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO recipe_ingredient 
            (quantity,  ingredient_id,recipe_id)
            VALUES
            ( ? , ? , ? )
            `,
      [
        recipeIngredient.quantity,
        recipeIngredient.label,
        recipeIngredient.recipe_id,
      ],
    );

    return result.insertId;
  }

  async read(recipeId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT ri.id AS recipe_ingredient_id,
      ri.quantity,
      i.label
      FROM recipe_ingredient ri
      JOIN ingredient i ON ri.ingredient_id = i.id
      WHERE ri.recipe_id = ?`,
      [recipeId],
    );

    return rows as RecipeIngredientType[];
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM recipe_ingredient
      WHERE recipe_id = ?`,
      [id],
    );

    return result.affectedRows;
  }
}

export default new RecipeIngredientRepository();
