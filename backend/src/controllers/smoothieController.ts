import { Request, Response } from 'express'
import { pool } from '../config/dbConfig.js'
import * as smoothieQueries from '../queries/smoothieQueries.js'
import { NutrientType } from '../types/fruit.js'
import { SmoothieType, FruitsType } from '../types/smoothie.js'

// Get the nutritional data for a mix of fruits (name) and their individual (amount)
export const getSmoothie = async (req: Request, res: Response) => {
  if(req.body.fruits === undefined || req.body.fruits.length === 0) {
    return res.json({ message: 'No ingredients provided!' })
  }
  
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
    
    if(result.rowCount === 0) {
      return res.json({ message: `No fruit called ${fruit.name} exists in this database` })
    }
    
    let nutrition = result.rows[0]
    
    for(const nutrient in nutrition) {
      nutritionContent[nutrient as keyof NutrientType] += nutrition[nutrient] * fruit.amount
    }
  }
  
  res.json(nutritionContent)
}