DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
     id INT AUTO_INCREMENT NOT NULL,
     burger_name VARCHAR(255) NOT NULL,
     devoured BOOLEAN NOT NULL,
     PRIMARY KEY (id)
);



INSERT INTO burger (burger_name, devoured) 
VALUES ("Hawaian Burger", FALSE),
       ("Relentles Burger", FALSE),
       ("Invisivility Burger", FALSE),
       ("Ultra Cal Burger", FALSE),
       ("Vesuvius Burger", FALSE),
       ("Bacon Only Burger", FALSE);