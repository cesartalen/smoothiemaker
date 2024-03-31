import express from 'express'
import * as smoothieControllers from '../controllers/smoothieController.js'

export const router = express.Router()

router.post('/smoothie-mix', smoothieControllers.getSmoothie)