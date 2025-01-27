export type DietTypeType = {
  id: number;
  label: string;
};

export type RecipeDataType = {
  id: number;
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

export type CategoryType = {
  label: string;
};
