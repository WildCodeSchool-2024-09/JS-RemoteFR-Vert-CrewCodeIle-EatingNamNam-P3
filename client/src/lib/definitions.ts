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

export type RecipeDataAdminList = {
  id: number;
  title: string;
  created_at: string;
  username: string;
};

export type CategoryType = {
  label: string;
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
