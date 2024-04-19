import { ChangeEvent, useState } from 'react'
import { postSmoothieMix } from '../services/apiSmoothies'
import { TotalNutritionDisplay } from '../components/TotalNutritionDisplay'

// Move this one into -> types -> ?
export type NutritionDataType = {
  calories: number,
  fat: number,
  sugar: number,
  carbohydrates: number,
  protein: number
}

export const HomePage = () => {
  const [inputData, setInputData] = useState<string>()
  const [nutritionData, setNutritionData] = useState<NutritionDataType>()

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
      <div className='mt-24 max-w-2xl m-auto'>
        <h1 className='text-3xl'>Create a smoothie mix</h1>
        <div className='mt-6'>
        <p>Write the contents of your smoothie and get the nutritional value. Start with the name of the fruit and the amount separated by space, then separate fruits by comma.</p> 
        <p>Example: <b>Jackfruit 8, Mango 4, Lime 1</b>.
        Nutritional content is per 100 grams</p></div>
      </div>
      <div className='mt-12 flex flex-col max-w-[600px] m-auto'>
        {nutritionData && (
          <>
            <TotalNutritionDisplay nutritionData={nutritionData}/>
          </>
        )}
        <textarea rows={4} cols={50} onChange={handleChange} placeholder='Separate fruits by comma' className='border-gray-400 border-2 rounded-md focus:border-cyan-400 focus:outline-none p-4'/>
        <button className='border-gray-400 border-2 rounded-md focus:outline-none mt-6 p-4 hover:border-gray-300' onClick={() => handleSubmit()}>Get Nutritional Data</button>
      </div>
    </>
  )
}