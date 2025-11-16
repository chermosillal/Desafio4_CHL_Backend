import express from 'express';
import PostController from '../src/controllers/postController.js';

const router = express.Router();

// Rutas para posts
router.get('/posts', PostController.getAllPosts);           // Obtener todos los posts
router.post('/posts', PostController.createPost);           // Crear un nuevo post
router.put('/posts/like/:id', PostController.likePost);     // Incrementar likes
router.delete('/posts/:id', PostController.deletePost);     // Eliminar post

export default router;
