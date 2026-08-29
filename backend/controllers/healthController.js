// healthController.js — responds to the health check.
// Kept separate from the route definition per the routes → controllers layering.
//
// The database status is derived from whether server.js completed its startup
// connection test (set via app.set('dbConnected', true)). This keeps the health
// endpoint dependency-free of pool internals and never exposes credentials.
import { testDatabaseConnection } from '../config/db.js'

export async function getHealth(req, res) {
  let database = 'disconnected'

  try {
    await testDatabaseConnection()
    database = 'connected'
  } catch {
    // Health check still reports 200 for the API itself; the `database`
    // field tells clients whether persistence is currently reachable.
    database = 'disconnected'
  }

  res.status(200).json({
    success: true,
    message: 'API is running',
    database,
    timestamp: new Date().toISOString(),
  })
}

export default getHealth