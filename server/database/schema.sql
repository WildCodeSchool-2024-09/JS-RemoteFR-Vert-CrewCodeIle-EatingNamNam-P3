CREATE TABLE role (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  user_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  birth_date DATE NOT NULL,
  localisation VARCHAR(255) NOT NULL,
  profession VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(role_id) REFERENCES role(id)
);

CREATE TABLE recipe(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  picture VARCHAR(255) DEFAULT NULL,
  summary TEXT NOT NULL,
  prep_time INT UNSIGNED NOT NULL,
  cook_time INT UNSIGNED NOT NULL,
  serving TINYINT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id)
);

CREATE TABLE user_com_recipe (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  com_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  rating TINYINT UNSIGNED DEFAULT NULL,
  com_content TEXT NOT NULL,
  com_picture VARCHAR(255) DEFAULT NULL,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  recipe_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(recipe_id) REFERENCES recipe(id)
);

CREATE TABLE user_fav_recipe (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  recipe_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(recipe_id) REFERENCES recipe(id)
);

CREATE TABLE category(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL UNIQUE
  );

CREATE TABLE recipe_category (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(recipe_id) REFERENCES recipe(id),
  category_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE diet_type(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE recipe_diet(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(recipe_id) REFERENCES recipe(id),
  diet_type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(diet_type_id) REFERENCES diet_type(id)
);

CREATE TABLE step(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  content TEXT NOT NULL,
  step_order TINYINT NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(recipe_id) REFERENCES recipe(id)
);

CREATE TABLE unit_type (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(3) NOT NULL UNIQUE
);

CREATE TABLE ingredient(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL UNIQUE,
  protein_amount FLOAT UNSIGNED NOT NULL,
  carb_amount FLOAT UNSIGNED NOT NULL,
  fat_amount FLOAT UNSIGNED NOT NULL,
  calorie_amount FLOAT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  unit_type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(unit_type_id) REFERENCES unit_type(id)
);

CREATE TABLE recipe_ingredient(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  quantity FLOAT UNSIGNED NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(recipe_id) REFERENCES recipe(id),
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(ingredient_id) REFERENCES ingredient(id)
);

INSERT INTO role (id, label)
VALUES(1, "admin");

INSERT INTO user(
    id, 
  username, 
  email, 
  password_hash, 
  avatar,
  birth_date,
  localisation,
  profession,
  firstname,
  lastname,
  role_id)
VALUES (1,
 "harryrouter", 
 "harryrouter@eatingnamnam.fr", 
 "harryrouter", 
 "photo", 
 '1993-08-20',
 "preaulard",
 "sorcier", 
 "harry",
 "router",
 1);

INSERT INTO unit_type (id,label)
VALUES(1,"pce");

  