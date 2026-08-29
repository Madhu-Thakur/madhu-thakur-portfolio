// server.js — server entry point.
//
// Responsibilities: load environment variables via dotenv, import the Express
// app, verify the database connection, and start the HTTP server on the
// configured PORT. Kept intentionally small and easy to explain.
import 'dotenv/config'
import app from './app.js'
import { testDatabaseConnection } from './config/db.js'

const PORT = process.env.PORT || 5000

async function startServer() {
  // Fail fast (with a SAFE, credential-free error) if the database is
  // unreachable. No request will work without it, so don't half-start.
  try {
    await testDatabaseConnection()
    // eslint-disable-next-line no-console
    console.log('Database connection established')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Database connection failed:', error.code || error.message)
    // eslint-disable-next-line no-console
    console.error('Check that MySQL is running and DB_* values in backend/.env are correct.')
    process.exit(1)
  }

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API server running on http://localhost:${PORT}`)
  })
}

startServer()