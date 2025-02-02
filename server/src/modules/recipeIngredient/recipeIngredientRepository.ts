import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";
import type { RecipeIngredientType } from "../../lib/definitions";

class RecipeIngredientRepository {
  async create(recipeIngredient: Omit<RecipeIngredientType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO recipe_ingredient 
            (quantity, recipe_id, ingredient_id)
            VALUES
            ( ? , ? , ? )
            `,
      [
        recipeIngredient.quantity,
        recipeIngredient.recipe_id,
        recipeIngredient.ingredient_id,
      ],
    );

    return result.insertId;
  }
}

export default new RecipeIngredientRepository();
