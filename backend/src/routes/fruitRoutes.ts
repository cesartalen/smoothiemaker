import express from 'express'
import * as fruitControllers from '../controllers/fruitController.js'

export const router = express.Router()

// Routes for retrieving fruit data
router.get('/fruit/:fruit', fruitControllers.getFruit)
router.get('/fruits', fruitControllers.getFruits) 
router.get('/fruit-nutrition/:fruitId', fruitControllers.getFruitNutrition)
router.get('/fruit-and-nutrition/:fruit', fruitControllers.getFruitAndNutrition)
router.get('/fruits-and-nutrition', fruitControllers.getFruitsAndNutrition)