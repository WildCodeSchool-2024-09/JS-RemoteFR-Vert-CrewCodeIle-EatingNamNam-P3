import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

import type { IngredientType } from "../../lib/definitions";

class IngredientRepository {
  async create(ingredient: Omit<IngredientType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO ingredient (label, protein_amount, carb_amount, fat_amount, calorie_amount, user_id, unit_type_id)
            VALUE (?,?,?,?,?,?,?)`,
      [
        ingredient.label,
        ingredient.protein_amount,
        ingredient.carb_amount,
        ingredient.fat_amount,
        ingredient.calorie_amount,
      ],
    );
    return result.insertId;
  }
}

export default new IngredientRepository();
