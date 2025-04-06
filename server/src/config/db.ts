import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || '',
  database: process.env.DB_DATABASE || '',
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: true, // Change to true for local dev / self-signed certs
  },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then((pool: any) => {
      console.log('Connected to MSSQL');
      return pool;
    })
    .catch((err: any) => {
      console.error('Database connection failed:', err);
      throw err;
      //process.exit(1);
    });

export { sql, poolPromise };