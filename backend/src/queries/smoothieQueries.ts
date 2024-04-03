export const getOnlyFruitNutritionQuery = (fruit: string) => {
  return {
    text: 'SELECT calories, fat, sugar, protein, carbohydrates FROM fruit JOIN fruit_nutrition ON fruit.id = fruit_nutrition.fruit_id WHERE name = $1',
    values: [fruit],
  }
}

// Creates new smoothie using (name) and returns its id
export const createSmoothieQuery = (name: string) => {
  return {
    text: 'INSERT INTO smoothie (name) VALUES ($1) RETURNING id',
    values: [name],
  }
}

// Adds an (amount) of any fruit (name) to a smoothie (smoothieId)
export const addFruitToSmoothieQuery = (smoothieId: any, name: string, amount: number) => {
  return {
    text: 'INSERT INTO smoothie_ingredients (smoothie_id, fruit_id, amount) VALUES ($1, (SELECT id FROM fruit WHERE name = $2), $3)',
    values: [smoothieId, name, amount],
  }
}

export const getSmoothiesQuery = () => {
  return 'SELECT * FROM smoothie'
}