export const getFruit = (fruit: string) => {
  return {
    text: 'SELECT * FROM fruit WHERE name = $1',
    values: [fruit],
  }
}

export const getFruitNutrition = (fruitId: number) => {
  return {
    text: 'SELECT * FROM fruit_nutrition WHERE fruit_id = $1',
    values: [fruitId],
  }
}

export const getFruits = () => {
  return 'SELECT * FROM fruit'
}

