CREATE DATABASE IF NOT EXISTS Registration;
USE Registration;
CREATE TABLE IF NOT EXISTS user(
            user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
            user_name VARCHAR(255) NOT NULL,
            user_password VARCHAR(255) NOT NULL
            );