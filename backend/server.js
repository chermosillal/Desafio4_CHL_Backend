import express from 'express';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Server Activo !!');
});

// Rutas de la API
app.use('/', postRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
