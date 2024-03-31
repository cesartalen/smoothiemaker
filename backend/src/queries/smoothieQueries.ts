export const getOnlyFruitNutritionQuery = (fruit: string) => {
  return {
    text: 'SELECT calories, fat, sugar, protein, carbohydrates FROM fruit JOIN fruit_nutrition ON fruit.id = fruit_nutrition.fruit_id WHERE name = $1',
    values: [fruit],
  }
}