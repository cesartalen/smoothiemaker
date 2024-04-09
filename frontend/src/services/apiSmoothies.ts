import axios from 'axios'
import { POST_SMOOTHIE_MIX } from '../statics/apiUrls'

export const postSmoothieMix = async () => {
  const response = await axios.post(POST_SMOOTHIE_MIX, {
    "fruits": [
        {
            "name": "Banana",
            "amount": 3
        },
        {
            "name": "Blueberry",
            "amount": 4
        }
    ]
  })
  return response.data
}
