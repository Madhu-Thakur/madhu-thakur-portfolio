// server.js — server entry point.
//
// Responsibilities: load environment variables via dotenv, import the Express
// app, and start the HTTP server on the configured PORT. Kept intentionally
// small and easy to explain.
import 'dotenv/config'
import app from './app.js'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server running on http://localhost:${PORT}`)
})