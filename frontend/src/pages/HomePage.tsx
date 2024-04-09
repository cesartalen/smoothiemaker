import { ChangeEvent, useState } from 'react'
import { postSmoothieMix } from '../services/apiSmoothies'

export const HomePage = () => {
  const [inputData, setInputData] = useState<string>()
  // Todo NutritionDataType
  const [nutritionData, setNutritionData] = useState<any>()

  const handleSubmit = async () => {
    if(inputData != undefined) {
      /* Separates the data by commas into arrays.
         
         Removes spaces from beginning and end of all data
         
         Splits into two parts, by splitting the numbers at the end, one part name and one part amount
         
         Removes spaces from end of name

         Parse int on amount, or set 1 if nothing is specified
      */
      let data = inputData.split(',').map(item => {
        let parts = item.trim().split(/(\d+)$/)
        let name = parts[0].trim()
        let amount = parseInt(parts[1]) || 1
        return { name, amount }
      })

      let jsonData = {
        fruits: data
      }

      await postSmoothieMix(jsonData).then(data => setNutritionData(data))
    }

    //TODO Notify user that nothing happens cause input is empty
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputData(e.target.value)
  }
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <div>
        {nutritionData && (
          <>
            <p>Calories: {nutritionData.calories}</p>
            <p>Sugar: {nutritionData.sugar}</p>
            <p>Fat: {nutritionData.fat}</p>
            <p>Carbs: {nutritionData.carbohydrates}</p>
            <p>Protein: {nutritionData.protein}</p>
          </>
        )}
        <textarea rows={4} cols={50} onChange={handleChange} placeholder='Separate fruits by comma'/>
        <button onClick={() => handleSubmit()}></button>
      </div>
    </>
  )
}