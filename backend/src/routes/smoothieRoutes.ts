import express from 'express'
import * as smoothieControllers from '../controllers/smoothieController.js'

export const router = express.Router()

// Routes for retrieving smoothies, or nutritional data for combinations of fruits (smoothie)
router.post('/smoothie-mix', smoothieControllers.getSmoothie)