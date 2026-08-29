// healthController.js — responds to the health check.
// Kept separate from the route definition per the routes → controllers layering.
export function getHealth(req, res) {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  })
}

export default getHealth