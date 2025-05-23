CREATE DATABASE company_db;

USE company_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Insert a test user (password: 12345)
INSERT INTO users (username, password) VALUES ('admin', '$2y$10$w4h6EGzqM/VYTrVrfFUsB.F.dDFe5L5TTkEIEbop/FUz23we37KL2');
