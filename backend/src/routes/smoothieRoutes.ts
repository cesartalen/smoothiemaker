import express from 'express'
import * as smoothieControllers from '../controllers/smoothieController.js'
import rateLimit from 'express-rate-limit'

export const router = express.Router()

// Rate limiter for creating smoothie route, limits the number of requests to 2 every 6 hours
export const createSmoothieLimiter = rateLimit({
  windowMs: 6 * 60 * 60 * 1000,
  max: 2,
  message: 'Create smoothie can only be done 2 times every 6 hours.'
})

// Routes for retrieving smoothies, or nutritional data for combinations of fruits (smoothie)
router.post('/smoothie-mix', smoothieControllers.getSmoothie)
router.get('/smoothies', smoothieControllers.getSmoothies)
router.get('/smoothie/:smoothieId', smoothieControllers.getSmoothieById)

// Route for creating a new smoothie, uses createSmoothieLimiter to limit the number of requests
router.post('/create-smoothie', createSmoothieLimiter, smoothieControllers.createSmoothie)