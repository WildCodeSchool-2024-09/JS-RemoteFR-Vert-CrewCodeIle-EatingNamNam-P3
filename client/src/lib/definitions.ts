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

export type CategoryType = {
  label: string;
};
