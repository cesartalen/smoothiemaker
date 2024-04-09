// Api root, all api urls will be appended to this
const API_ROOT = 'http://192.168.1.78:3000'

// Fruit routes
export const GET_ALL_FRUITS = `${API_ROOT}/fruits/fruits`

export const GET_ALL_FRUITS_AND_NUTRITION = `${API_ROOT}/fruits/fruits-and-nutrition`

// Smoothie routes
export const POST_SMOOTHIE_MIX = `${API_ROOT}/smoothies/smoothie-mix`