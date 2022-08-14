-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
USE DATABASE ecommerce_db;

CREATE TABLE category (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(30) NOT NULL,
);

CREATE TABLE product (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL,
    -- validates that the value is a decimal
    stock INT NOT NULL DEFAULT 10,
    -- validates that the value is numeric
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category (id),
);

CREATE TABLE tag (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES product (id),
    tag_id INT,
    FOREIGN KEY tag_id REFERENCES tag (id),
);

