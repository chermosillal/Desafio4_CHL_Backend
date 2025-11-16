# Backend - Desafío 4

API REST para la gestión de posts con likes.

## Instalación

```bash
npm install
```

## Configuración

1. Copia el archivo `.env.example` a `.env`
2. Configura las variables de entorno con tus credenciales de PostgreSQL

## Ejecución

### Modo desarrollo (con nodemon)
```bash
npm run dev
```

### Modo producción
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## Endpoints

- `GET /` - Verifica que el servidor esté activo
- `GET /posts` - Obtiene todos los posts
- `POST /posts` - Crea un nuevo post
