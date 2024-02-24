

CREATE DATABASE checkout;

USE checkout;

-- CREATE TABLE accounts  (
--   customerId int NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   name varchar(50) NOT NULL,
--   email varchar(50) NOT NULL UNIQUE,
--   password varchar(50) NOT NULL,
--   shipping int NOT NULL,
--   card int NOT NULL,
--   FOREIGN KEY (`shipping`)REFERENCES shipping(shippingId),
--   FOREIGN KEY (`card`) REFERENCES card(cardId)
-- )

-- CREATE TABLE shipping  (
--   shippingId int NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   line1 varchar(50) NOT NULL,
--   line2 varchar(50) NULL,
--   city varchar(50) NOT NULL,
--   state varchar(50) NOT NULL,
--   zipCode int NOT NULL,
--   phoneNumber int NOT NULL
-- )

-- CREATE TABLE card  (
--   cardId int NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   cardNumber int NOT NULL,
--   expiration DATE NOT NULL

-- )