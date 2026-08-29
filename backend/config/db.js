// config/db.js — database connectivity.
//
// Owns ONLY database configuration: creates a pooled mysql2 connection and
// exposes a way to verify the connection. No queries, no business logic.
// Uses `mysql2/promise` so the pool supports async/await.

import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
  // Unicode-compatible so future tables can store any text safely.
  charset: 'utf8mb4',
})

/**
 * Verify the database connection by running a lightweight query.
 * Returns nothing on success; throws a SAFE, credential-free error on failure.
 */
export async function testDatabaseConnection() {
  const connection = await pool.getConnection()
  try {
    await connection.query('SELECT 1')
  } finally {
    connection.release()
  }
}

export default pool