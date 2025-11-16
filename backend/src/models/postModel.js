import pool from '../../db/config.js';

// Modelo: Capa de acceso a datos
const PostModel = {
  // Obtener todos los posts
  findAll: async () => {
    try {
      const query = 'SELECT * FROM posts ORDER BY id DESC';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      console.error('Error al obtener los posts:', error.message);
      throw error;
    }
  },

  // Crear un nuevo post
  create: async (titulo, img, descripcion) => {
    try {
      const query = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *';
      const values = [titulo, img, descripcion];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error al crear el post:', error.message);
      throw error;
    }
  },

  // Incrementar likes de un post
  incrementLikes: async (id) => {
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
  },

  // Eliminar un post
  delete: async (id) => {
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
  }
};

export default PostModel;
