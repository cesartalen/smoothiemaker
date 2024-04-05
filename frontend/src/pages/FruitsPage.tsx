import { useEffect, useState } from 'react'
import { getFruitsAndNutrition } from '../services/apiFruits'
import { FruitAndNutritionType } from '../types/fruitTypes'

export const FruitsPage = () => {
  const [fruitsData, setFruitsData] = useState<FruitAndNutritionType | null>(null)
  const [selectedFruitId, setSelectedFruitId] = useState<number | null>(null)

  const handleFruitClick = (fruitId: number) => {
    setSelectedFruitId(selectedFruitId === fruitId ? null : fruitId)
  }

  useEffect(() => {
    if(fruitsData === null) {
      getFruitsAndNutrition()
      .then(data => setFruitsData(data))
      .catch(err => console.error(err))
    }
  }, [])

  return (
    <div>
      <h1>All Fruits</h1>
      {fruitsData ? (
          <ul>
            {Array.isArray(fruitsData) && fruitsData.map((fruit: FruitAndNutritionType) => (
              <li key={fruit.id} onClick={() => handleFruitClick(fruit.id)}>{fruit.name}
              {selectedFruitId === fruit.id && (
                <div>
                  <p>Calories: {fruit.calories}</p>
                  <p>Sugar: {fruit.sugar}</p>
                  <p>Fat: {fruit.fat}</p>
                  <p>Carbs: {fruit.carbohydrates}</p>
                  <p>Protein: {fruit.protein}</p>
                </div>
              )}
              </li>
            ))}
        	</ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}