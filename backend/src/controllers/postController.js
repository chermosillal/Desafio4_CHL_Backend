import PostModel from '../models/postModel.js';

// Controlador: Lógica de negocio y manejo de peticiones
const PostController = {
  // GET /posts - Obtener todos los posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await PostModel.findAll();
      res.json(posts);
    } catch (error) {
      console.error('Error en GET /posts:', error.message);
      res.status(500).json({ 
        error: 'Error al obtener los posts', 
        detalle: error.message 
      });
    }
  },

  // POST /posts - Crear un nuevo post
  createPost: async (req, res) => {
    try {
      const { titulo, url, descripcion } = req.body;
      
      // Validación de campos requeridos
      if (!titulo || !url || !descripcion) {
        return res.status(400).json({ 
          error: 'Todos los campos son requeridos: titulo, url, descripcion' 
        });
      }
      
      const newPost = await PostModel.create(titulo, url, descripcion);
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Error en POST /posts:', error.message);
      res.status(500).json({ 
        error: 'Error al crear el post', 
        detalle: error.message 
      });
    }
  },

  // PUT /posts/like/:id - Incrementar likes de un post
  likePost: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Validación de ID
      if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
      }
      
      const updatedPost = await PostModel.incrementLikes(id);
      res.json(updatedPost);
    } catch (error) {
      console.error('Error en PUT /posts/like/:id:', error.message);
      
      if (error.message.includes('no encontrado')) {
        return res.status(404).json({ error: error.message });
      }
      
      res.status(500).json({ 
        error: 'Error al actualizar likes', 
        detalle: error.message 
      });
    }
  },

  // DELETE /posts/:id - Eliminar un post
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Validación de ID
      if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
      }
      
      const deletedPost = await PostModel.delete(id);
      res.json({ 
        message: 'Post eliminado exitosamente', 
        post: deletedPost 
      });
    } catch (error) {
      console.error('Error en DELETE /posts/:id:', error.message);
      
      if (error.message.includes('no encontrado')) {
        return res.status(404).json({ error: error.message });
      }
      
      res.status(500).json({ 
        error: 'Error al eliminar el post', 
        detalle: error.message 
      });
    }
  }
};

export default PostController;
