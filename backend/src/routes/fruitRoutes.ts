import express from 'express'
import { getFruit } from '../controllers/fruitController.js'

export const router = express.Router()

router.get('/fruit/:fruit', getFruit)