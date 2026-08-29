// app.js — Express application configuration.
//
// Responsibilities: create the app, register middleware, mount routes, and
// register the 404 + centralized error handlers. It does NOT start the HTTP
// server (that happens in server.js) and does NOT call app.listen().
// Environment variables are loaded in server.js via dotenv.

import express from 'express'
import cors from 'cors'
import healthRoutes from './routes/healthRoutes.js'
import { notFoundHandler, errorHandler } from './middleware/errorMiddleware.js'

const app = express()

// ---------- Middleware ----------
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ---------- Routes ----------
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Portfolio API' })
})
app.use('/api', healthRoutes)

// ---------- 404 + centralized error handling ----------
app.use(notFoundHandler)
app.use(errorHandler)

export default app