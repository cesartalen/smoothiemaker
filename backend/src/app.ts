import express from 'express';
import { router as smoothieRouter } from './routes/smoothieRoutes.js'
import { router as fruitRouter } from './routes/fruitRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js';
import rateLimit from 'express-rate-limit';
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://www.localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
)

// Global rate limiter, limits the number of requests to 50 every 15 minutes for all routes
export const sharedLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: 'Too many requests, please try again later.'
})

app.use(sharedLimiter)
app.use('/smoothies', smoothieRouter)
app.use('/fruits', fruitRouter)

// Using error handler middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
