CREATE DATABASE smoothiemaker;

CREATE TABLE smoothie (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE fruit (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE fruit_nutrition (
  id SERIAL PRIMARY KEY,
  fruit_id INT NOT NULL,
  calories INT NOT NULL,
  fat INT NOT NULL,
  sugar INT NOT NULL,
  carbohydrates INT NOT NULL,
  protein INT NOT NULL,
  FOREIGN KEY (fruit_id) REFERENCES fruit(id)
);

CREATE TABLE smoothie_ingredients (
  id SERIAL PRIMARY KEY,
  smoothie_id INT NOT NULL,
  fruit_id INT NOT NULL,
  amount INT NOT NULL,
  FOREIGN KEY (smoothie_id) REFERENCES smoothie(id),
  FOREIGN KEY (fruit_id) REFERENCES fruit(id)
);