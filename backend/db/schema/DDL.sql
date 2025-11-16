-- DDL (Data Definition Language)
-- Script para crear la estructura de la base de datos

-- Eliminar la tabla si existe (opcional, para poder recrearla)
DROP TABLE IF EXISTS posts;

-- Crear la tabla posts
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(25) NOT NULL,
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índices para mejorar el rendimiento (opcional)
CREATE INDEX idx_posts_likes ON posts(likes DESC);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
