export const getFruitQuery = (fruit: string) => {
  return {
    text: 'SELECT * FROM fruit WHERE name = $1',
    values: [fruit],
  }
}

export const getFruitNutritionQuery = (fruitId: number) => {
  return {
    text: 'SELECT * FROM fruit_nutrition WHERE fruit_id = $1',
    values: [fruitId],
  }
}

export const getFruitsQuery = () => {
  return 'SELECT * FROM fruit'
}


export const getFruitsAndNutritionQuery = () => {
  return 'SELECT * FROM fruit JOIN fruit_nutrition ON fruit.id = fruit_nutrition.fruit_id'
}

export const getFruitAndNutritionQuery = (fruit: string) => {
  return {
    text: 'SELECT * FROM fruit JOIN fruit_nutrition ON fruit.id = fruit_nutrition.fruit_id WHERE name = $1',
    values: [fruit],
  }
}