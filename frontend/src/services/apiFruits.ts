import axios from 'axios'
import { GET_ALL_FRUITS } from '../statics/apiUrls'

// API call to get all fruits
export const getFruits = async () => {
  const response = await axios.get(GET_ALL_FRUITS)
  return response.data
}