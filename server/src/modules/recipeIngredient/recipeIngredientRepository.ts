import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";
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
