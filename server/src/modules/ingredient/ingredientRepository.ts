import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

import type { IngredientType } from "../../lib/definitions";

class IngredientRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `
            SELECT *
            FROM ingredient`,
    );
    return rows as IngredientType[];
  }

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
        ingredient.user_id,
        ingredient.unit_type_id,
      ],
    );
    return result.insertId;
  }
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
            SELECT *
            FROM ingredient
            WHERE id= ?`,
      [id],
    );
    return rows[0] as IngredientType;
  }

  async update(ingredient: IngredientType) {
    const [result] = await databaseClient.query<Result>(
      `
            UPDATE ingredient
            SET label = ?, protein_amount = ?, carb_amount = ?, fat_amount = ?, calorie_amount = ?, user_id = ?, unit_type_id = ?
            WHERE id`,
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
    return result.affectedRows;
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `
        DELETE FROM ingredient
        WHERE id = ?`,
      [id],
    );
    return result.affectedRows;
  }
}

export default new IngredientRepository();
