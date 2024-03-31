import { Request, Response } from 'express'
import { pool } from '../config/dbConfig.js'
import * as fruitQueries from '../queries/fruitQueries.js'

export const getFruit = async (req: Request, res: Response) => {
  const { fruit } = req.params
  const result = await pool.query(fruitQueries.getFruitQuery(fruit))
  res.json(result.rows)
}

export const getFruits = async (req: Request, res: Response) => {
  const result = await pool.query(fruitQueries.getFruitsQuery())
  res.json(result.rows)
}

export const getFruitNutrition = async (req: Request, res: Response) => {
  const { fruitId } = req.params
  const result = await pool.query(fruitQueries.getFruitNutritionQuery(parseInt(fruitId)))
  res.json(result.rows)
}

export const getFruitAndNutrition = async (req: Request, res: Response) => {
  const { fruit } = req.params
  const result = await pool.query(fruitQueries.getFruitAndNutritionQuery(fruit))
  res.json(result.rows)
}

export const getFruitsAndNutrition = async (req: Request, res: Response) => {
  const result = await pool.query(fruitQueries.getFruitsAndNutritionQuery())
  res.json(result.rows)
}