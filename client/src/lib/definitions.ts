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

export type AddIngredientData = {
  label: string;
  protein_amount: number;
  carb_amount: number;
  fat_amount: number;
  calorie_amount: number;
  user_id: number;
  unit_type_id: number;
};

export type AuthType = {
  authentified: boolean;
};

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
  recipe_ingredient: {
    quantity: number;
    label: string;
  }[];
  prep_time: number;
  cook_time: number;
  serving: number;
  created_at: string;
  user_id: number;
  username: string;
};

export type RecipeDataAdminList = {
  id: number;
  title: string;
  created_at: string;
  username: string;
};

export type RecipeDetailsDataType = {
  recipe: {
    id: number;
    title: string;
    picture: string;
    summary: string;
    prep_time: number;
    cook_time: number;
    serving: number;
    created_at: string;
    user_id: number;
    username: string;
  };
  steps: {
    id: number;
    step_order: number;
    content: string;
  }[];
};

export type CategoryType = {
  label: string;
};

export type CommentaryType = {
  id: number;
  rating: number;
  com_content: string;
  com_picture: string;
  user_id: number;
  recipe_id: number;
  username: string;
};

export type UnitTypeType = {
  label: string;
};

export type UserType = {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  confirmPassword: string;
  avatar: string;
  birth_date: Date;
  localisation: string;
  profession: string;
  firstname: string;
  lastname: string;
  roleId: number;
};

export type RegistrerPopupProps = {
  closePopupRegistre: () => void;
};

export type IngredientPopupProps = {
  closePopUp: () => void;
};

export type RecipeIngredientType = {
  id: number;
  quantity: number;
  recipe_id: number;
  ingredient_id: number;
};
