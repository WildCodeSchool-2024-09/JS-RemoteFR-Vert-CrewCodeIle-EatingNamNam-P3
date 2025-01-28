export type CategoryType = {
  id: number;
  label: string;
};

export type DietTypeType = {
  id: number;
  label: string;
};

export type IngredientType = {
  id: number;
  label: string;
  protein_amount: number;
  carb_amount: number;
  fat_amount: number;
  calorie_amount: number;
  user_id: number;
  unit_type_id: number;
};

export type RecipeDataType = {
  id: number;
  title: string;
  picture: string;
  summary: string;
  prep_time: number;
  cook_time: number;
  serving: number;
  user_id: number;
};

export type RoleType = {
  id: number;
  label: string;
};

export type commentaryType = {
  id: number;
  rating: number;
  com_content: string;
  com_picture: string;
  user_id: number;
  recipe_id: number;
};
