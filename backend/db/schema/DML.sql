-- DML (Data Manipulation Language)
-- Script para insertar datos de ejemplo en la base de datos

-- Limpiar datos existentes (opcional)
TRUNCATE TABLE posts RESTART IDENTITY CASCADE;

-- Insertar posts de películas de ejemplo
INSERT INTO posts (titulo, img, descripcion, likes) VALUES
('Mamma Mia', 'https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_.jpg', 'Una joven invita a tres exparejas de su despreocupada madre a su boda en una isla griega.', 0),
('Titanic', 'https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzOS00NTRjLWJjMjEtNGRkNTZhN2U5YWJkXkEyXkFqcGc@._V1_.jpg', 'Titanic es una película de 1997, dramática y de catástrofe, dirigida por James Cameron.', 0),
('The Matrix', 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg', 'Un hacker descubre la impactante verdad sobre su realidad y su papel en la guerra.', 0),
('Inception', 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg', 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños.', 0),
('Interstellar', 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg', 'Un grupo de exploradores viajan a través de un agujero de gusano en el espacio.', 0),
('Avatar', 'https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg', 'Un marine parapléjico es enviado a la luna Pandora en una misión única.', 0);
