import express from 'express';
import cors from 'cors';
import { getPosts, createPost, updateLikes, deletePost } from './consultas.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Server Activo !!');
});

// Ruta GET para obtener todos los posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    console.error('Error en GET /posts:', error.message);
    res.status(500).json({ error: 'Error al obtener los posts', detalle: error.message });
  }
});

// Ruta POST para crear un nuevo post
app.post('/posts', async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    
    // Validación de campos requeridos
    if (!titulo || !url || !descripcion) {
      return res.status(400).json({ error: 'Todos los campos son requeridos: titulo, url, descripcion' });
    }
    
    const newPost = await createPost(titulo, url, descripcion);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error en POST /posts:', error.message);
    res.status(500).json({ error: 'Error al crear el post', detalle: error.message });
  }
});

// Ruta PUT para incrementar likes de un post
app.put('/posts/like/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validación de ID
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }
    
    const updatedPost = await updateLikes(id);
    res.json(updatedPost);
  } catch (error) {
    console.error('Error en PUT /posts/like/:id:', error.message);
    
    if (error.message.includes('no encontrado')) {
      return res.status(404).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Error al actualizar likes', detalle: error.message });
  }
});

// Ruta DELETE para eliminar un post
app.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validación de ID
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }
    
    const deletedPost = await deletePost(id);
    res.json({ message: 'Post eliminado exitosamente', post: deletedPost });
  } catch (error) {
    console.error('Error en DELETE /posts/:id:', error.message);
    
    if (error.message.includes('no encontrado')) {
      return res.status(404).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Error al eliminar el post', detalle: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
