import { Request, Response } from 'express'
import { pool } from '../config/dbConfig.js'
import * as smoothieQueries from '../queries/smoothieQueries.js'
import { NutrientType } from '../types/fruit.js'
import { SmoothieType, FruitsType } from '../types/smoothie.js'

export const getSmoothie = async (req: Request, res: Response) => {
  const fruits: SmoothieType = req.body

  let nutritionContent : NutrientType = {
    calories: 0,
    fat: 0,
    sugar: 0,
    protein: 0,
    carbohydrates: 0
  }

  for (const fruit of fruits.fruits) {
    const query = smoothieQueries.getOnlyFruitNutritionQuery(fruit.name)
    const result = await pool.query(query)

    let nutrition = result.rows[0]

    for(const nutrient in nutrition) {
      nutritionContent[nutrient as keyof NutrientType] += nutrition[nutrient] * fruit.amount
    }
  }
  
  res.json(nutritionContent)
}