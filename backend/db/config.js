import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;

// Configuración del pool de conexiones a PostgreSQL
const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  allowExitOnIdle: true
});

// Verificar conexión
pool.on('connect', () => {
  console.log('✓ Conectado a la base de datos PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Error inesperado en el cliente de PostgreSQL', err);
  process.exit(-1);
});

export default pool;
