import { NutritionDataType } from '../pages/HomePage'

// Displays the total nutrition from a smoothie mix
export const TotalNutritionDisplay = ({nutritionData} : {nutritionData: NutritionDataType}) => {
  return(
    <div>
      <p>Calories: {nutritionData.calories}</p>
      <p>Sugar: {nutritionData.sugar}</p>
      <p>Fat: {nutritionData.fat}</p>
      <p>Carbs: {nutritionData.carbohydrates}</p>
      <p>Protein: {nutritionData.protein}</p>
    </div>
  )
}