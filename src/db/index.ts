import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'faceit',
  password: 'yourpassword',
  port: 5432,
});

export default pool;
