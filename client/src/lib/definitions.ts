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
