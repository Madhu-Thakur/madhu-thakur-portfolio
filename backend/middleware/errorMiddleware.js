// errorMiddleware.js — centralized Express error handling.
//
// All errors (thrown by routes/controllers or passed via next(err)) end up
// here. It returns a consistent JSON shape and never leaks stack traces or
// internal details to API consumers.

// 404 handler — for unknown API routes.
export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
}

// Central error handler — must keep the 4-arg signature so Express treats it
// as error middleware.
export function errorHandler(err, req, res, next) {
  // Log internally for development/debugging (never sent to the client).
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(err)
  }

  const status = err.status || 500
  const message =
    status === 500 ? 'Something went wrong. Please try again.' : err.message

  res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== 'production' ? { stack: err.stack } : {}),
  })
}

export default errorHandler