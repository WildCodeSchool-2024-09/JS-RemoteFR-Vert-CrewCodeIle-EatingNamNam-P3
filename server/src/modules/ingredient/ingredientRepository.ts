import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

import type { IngredientType } from "../../lib/definitions";

class IngredientRepository {
  async create(ingredient: Omit<IngredientType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO ingredient (label, protein_amount, carb_amount, fat_amount, calorie_amount, user_id, unit_type_id)
            VALUE (?,?,?,?,?,1,1)`,
      [
        ingredient.label,
        ingredient.protein_amount,
        ingredient.carb_amount,
        ingredient.fat_amount,
        ingredient.calorie_amount,
        ingredient.user_id,
        ingredient.unit_type_id,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT label
        FROM ingredient
      `,
    );
    return rows as IngredientType[];
  }
}

export default new IngredientRepository();
