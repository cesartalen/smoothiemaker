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


/*
export const getSmoothie = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.json({ 'message: No fruits provided'})
  }

  const { fruits: SmoothieType } = req.body

  let nutritionContent : NutrientType = {
    calories: 0,
    fat: 0,
    sugar: 0,
    protein: 0,
    carbohydrates: 0
  }

  if (!req.body) {
    return res.status(400).json({ message: 'No fruits provided' });
  }

  const fruits: SmoothieType = req.body.fruits;

  for (const fruit of fruits.fruits) {
    const query = fruitQueries.getFruitAndNutritionQuery(fruit.fruit);
    const res = await pool.query(query);

    let nutrition = res.rows[0];
    for (const nutrient in nutrition) {
      nutritionContent[nutrient as keyof NutrientType] += nutrition[nutrient] * fruit.amount;
    }
  }

  res.json(nutritionContent);
}
*/