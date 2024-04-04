// Get fruit by (name), 
export const getFruitQuery = (fruit: string) => {
  return {
    text: 'SELECT * FROM fruit WHERE LOWER(name) = LOWER($1)',
    values: [fruit],
  }
}

export const getFruitsQuery = () => {
  return 'SELECT * FROM fruit'
}

export const getFruitNutritionQuery = (fruitId: number) => {
  return {
    text: 'SELECT * FROM fruit_nutrition WHERE fruit_id = $1',
    values: [fruitId],
  }
}

export const getFruitAndNutritionQuery = (fruit: string) => {
  return {
    text: 'SELECT * FROM fruit JOIN fruit_nutrition ON fruit.id = fruit_nutrition.fruit_id WHERE LOWER(name) = LOWER($1)',
    values: [fruit],
  }
}


export const getFruitsAndNutritionQuery = () => {
  return 'SELECT * FROM fruit JOIN fruit_nutrition ON fruit.id = fruit_nutrition.fruit_id'
}