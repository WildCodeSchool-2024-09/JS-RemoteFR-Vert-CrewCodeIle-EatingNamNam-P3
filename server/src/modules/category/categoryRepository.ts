import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

import type { CategoryType } from "../../lib/definitions";

class CategoryRepository {
  async create(category: Omit<CategoryType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO category
    (label)
  VALUES (?)`,
      [category.label],
    );
    return result.insertId;
  }
}

export default new CategoryRepository();
