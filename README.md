# Desafío 4 - Like Me

Proyecto Full Stack con backend en Express y frontend en React + Vite.

## Estructura del Proyecto

```
Desafio4_CHL_Backend/
├── backend/          # API REST con Express
│   ├── server.js
│   ├── consultas.js
│   ├── package.json
│   └── .env.example
├── frontend/         # Aplicación React
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Requisitos Previos

- Node.js (v14 o superior)
- PostgreSQL
- npm o yarn

## Configuración de la Base de Datos

1. Crea una base de datos llamada `likeme` en PostgreSQL
2. Ejecuta el siguiente script SQL para crear la tabla:

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(25) NOT NULL,
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT DEFAULT 0
);
```

## Instalación y Ejecución

### Backend

1. Navega a la carpeta backend:
```bash
cd backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Copia el archivo `.env.example` a `.env` y configura tus credenciales de PostgreSQL:
```bash
cp .env.example .env
```

4. Edita el archivo `.env` con tus credenciales:
```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=likeme
DB_PORT=5432
```

5. Inicia el servidor:
```bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
```

El servidor estará corriendo en `http://localhost:3000`

### Frontend

1. En otra terminal, navega a la carpeta frontend:
```bash
cd frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Endpoints del API

- `GET /` - Verifica que el servidor esté activo
- `GET /posts` - Obtiene todos los posts
- `POST /posts` - Crea un nuevo post
  - Body: `{ "titulo": "string", "url": "string", "descripcion": "string" }`

## Tecnologías Utilizadas

### Backend
- Express.js
- PostgreSQL (pg)
- CORS
- dotenv

### Frontend
- React 18
- Vite
- Axios
- Bootstrap 5
- Font Awesome

## Licencia

ISC
