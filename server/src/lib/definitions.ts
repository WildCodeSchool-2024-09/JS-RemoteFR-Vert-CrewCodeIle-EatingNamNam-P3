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
  picture?: string;
  summary: string;
  prep_time: number;
  cook_time: number;
  serving: number;
  user_id: number;
};

export type RecipeBodyType = {
  title: string;
  picture: string;
  summary: string;
  step: {
    step_order: number;
    content: string;
  }[];
  prep_time: number;
  cook_time: number;
  serving: number;
  user_id: number;
};

export type RoleType = {
  id: number;
  label: string;
};

export type StepType = {
  id: number;
  content: string;
  step_order: number;
  recipe_id: number;
};
