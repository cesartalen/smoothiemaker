import axios from 'axios'
import { POST_SMOOTHIE_MIX } from '../statics/apiUrls'

// TODO NutritionDataType
export const postSmoothieMix = async (data: any) => {
  const response = await axios.post(POST_SMOOTHIE_MIX, data)
  return response.data
}
