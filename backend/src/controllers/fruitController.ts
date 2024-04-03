import { NextFunction, Request, Response } from 'express'
import { pool } from '../config/dbConfig.js'
import * as fruitQueries from '../queries/fruitQueries.js'
import { ResponseStatus } from '../utils/responseStatus.js'
import { catchAsync } from '../utils/catchAsync.js'

// Controller functions for fruit routes

// Get a single fruit by its (name)
export const getFruit = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { fruit } = req.params
  if(!fruit) { 
    return next({
      message: 'No fruit provided',
      status: ResponseStatus.BAD_REQUEST
    })
  }

  const result = await pool.query(fruitQueries.getFruitQuery(fruit))
  if(result.rows.length === 0) {
    return next({
      message: 'Fruit not found',
      status: ResponseStatus.NOT_FOUND
    })
  }
  
  res.json(result.rows)
})

// Get all fruits ()
export const getFruits = catchAsync(async (req: Request, res: Response) => {
  const result = await pool.query(fruitQueries.getFruitsQuery())
  res.json(result.rows)
})

// Get the nutritional data for a single fruit by its (fruitId)
export const getFruitNutrition = catchAsync(async (req: Request, res: Response) => {
  const { fruitId } = req.params
  if(!fruitId) { 
    return res.json({ message: 'No fruit provided' })
  }

  if(!parseInt(fruitId)) {
    return res.json({ message: 'Invalid fruit id (must be a number)' })
  }

  const result = await pool.query(fruitQueries.getFruitNutritionQuery(parseInt(fruitId)))
  res.json(result.rows)
})

// Get the nutritional data for a single fruit by its (name)
export const getFruitAndNutrition = catchAsync(async (req: Request, res: Response) => {
  const { fruit } = req.params
  if(!fruit) { 
    return res.json({ message: 'No fruit provided' })
  }
  
  const result = await pool.query(fruitQueries.getFruitAndNutritionQuery(fruit))
  res.json(result.rows)
})

// Get the nutritional data for all fruits ()
export const getFruitsAndNutrition = catchAsync(async (req: Request, res: Response) => {
  const result = await pool.query(fruitQueries.getFruitsAndNutritionQuery())
  res.json(result.rows)
})