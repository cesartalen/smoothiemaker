import { NextFunction, Request, Response } from 'express'
import { pool } from '../config/dbConfig.js'
import * as smoothieQueries from '../queries/smoothieQueries.js'
import { NutrientType } from '../types/fruit.js'
import { FruitsType } from '../types/smoothie.js'
import { ResponseStatus } from '../utils/responseStatus.js'
import { catchAsync } from '../utils/catchAsync.js'

// Get the nutritional data for a mix of fruits (name) and their individual (amount)
export const getSmoothie = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  if(req.body.fruits === undefined || req.body.fruits.length === 0) {
    return next({ 
      message: 'No fruits provided!',
      status: ResponseStatus.BAD_REQUEST
     })
  }
  
  const fruits: FruitsType[] = req.body
  
  let nutritionContent : NutrientType = {
    calories: 0,
    fat: 0,
    sugar: 0,
    protein: 0,
    carbohydrates: 0
  }
  
  for (const fruit of fruits) {
    const query = smoothieQueries.getOnlyFruitNutritionQuery(fruit.name)
    const result = await pool.query(query)
    
    if(result.rowCount === 0) {
      return next({
        message: `No fruit called ${fruit.name} exists in this database!`,
        status: ResponseStatus.NOT_FOUND
      })
    }
    
    let nutrition = result.rows[0]
    
    for(const nutrient in nutrition) {
      nutritionContent[nutrient as keyof NutrientType] += nutrition[nutrient] * fruit.amount
    }
  }
  
  res.json(nutritionContent)
})

// Create a new smoothie with a name
export const createSmoothie = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  if(req.body.fruits === undefined || req.body.fruits.length === 0) {
    return next({
      message:'No fruits provided!',
      status: ResponseStatus.BAD_REQUEST
    })
  }

  const { name, fruits }: { name: string, fruits: FruitsType[] } = req.body

  const result = await pool.query(smoothieQueries.createSmoothieQuery(name))

  for(const fruit of fruits) {
    const query = smoothieQueries.addFruitToSmoothieQuery(result.rows[0].id, fruit.name, fruit.amount)
    await pool.query(query)
  }

  res.json({ message: `Smoothie ${name} created!` })
})

export const getSmoothies = catchAsync(async (req: Request, res: Response) => {
  const result = await pool.query(smoothieQueries.getSmoothiesQuery())
  res.json(result.rows)
})