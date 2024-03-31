import { Request, Response } from 'express'
import { pool } from '../config/dbConfig.js'
import { getFruitQuery } from '../queries/fruitQueries.js'

export const getFruit = async (req: Request, res: Response) => {
  const { fruit } = req.params
  const result = await pool.query(getFruitQuery(fruit))
  res.json(result.rows)
}
