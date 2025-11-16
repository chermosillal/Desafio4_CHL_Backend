import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  allowExitOnIdle: true
});

// Función para obtener todos los posts
export const getPosts = async () => {
  try {
    const query = 'SELECT * FROM posts ORDER BY id DESC';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error al obtener los posts:', error.message);
    throw error;
  }
};

// Función para crear un nuevo post
export const createPost = async (titulo, img, descripcion) => {
  try {
    const query = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *';
    const values = [titulo, img, descripcion];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Error al crear el post:', error.message);
    throw error;
  }
};

// Función para incrementar likes de un post
export const updateLikes = async (id) => {
  try {
    const query = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *';
    const values = [id];
    const { rows, rowCount } = await pool.query(query, values);
    
    if (rowCount === 0) {
      throw new Error(`Post con id ${id} no encontrado`);
    }
    
    return rows[0];
  } catch (error) {
    console.error('Error al actualizar likes:', error.message);
    throw error;
  }
};

// Función para eliminar un post
export const deletePost = async (id) => {
  try {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
    const values = [id];
    const { rows, rowCount } = await pool.query(query, values);
    
    if (rowCount === 0) {
      throw new Error(`Post con id ${id} no encontrado`);
    }
    
    return rows[0];
  } catch (error) {
    console.error('Error al eliminar el post:', error.message);
    throw error;
  }
};
