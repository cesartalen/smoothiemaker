import axios from 'axios'
import { GET_ALL_FRUITS, GET_ALL_FRUITS_AND_NUTRITION } from '../statics/apiUrls'

// API call to get all fruits
export const getFruits = async () => {
  const response = await axios.get(GET_ALL_FRUITS)
  return response.data
}

export const getFruitsAndNutrition = async () => {
  const response = await axios.get(GET_ALL_FRUITS_AND_NUTRITION)
  return response.data
}