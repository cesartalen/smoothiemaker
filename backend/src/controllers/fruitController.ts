import { NextFunction, Request, Response } from 'express'
import { pool } from '../config/dbConfig.js'
import * as fruitQueries from '../queries/fruitQueries.js'
import { ResponseStatus } from '../utils/responseStatus.js'

export const getFruit = async (req: Request, res: Response, next: NextFunction) => {
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
}

export const getFruits = async (req: Request, res: Response) => {
  const result = await pool.query(fruitQueries.getFruitsQuery())
  res.json(result.rows)
}

export const getFruitNutrition = async (req: Request, res: Response) => {
  const { fruitId } = req.params
  if(!fruitId) { 
    return res.json({ message: 'No fruit provided' })
  }

  if(!parseInt(fruitId)) {
    return res.json({ message: 'Invalid fruit id (must be a number)' })
  }

  const result = await pool.query(fruitQueries.getFruitNutritionQuery(parseInt(fruitId)))
  res.json(result.rows)
}

export const getFruitAndNutrition = async (req: Request, res: Response) => {
  const { fruit } = req.params
  if(!fruit) { 
    return res.json({ message: 'No fruit provided' })
  }
  
  const result = await pool.query(fruitQueries.getFruitAndNutritionQuery(fruit))
  res.json(result.rows)
}

export const getFruitsAndNutrition = async (req: Request, res: Response) => {
  const result = await pool.query(fruitQueries.getFruitsAndNutritionQuery())
  res.json(result.rows)
}