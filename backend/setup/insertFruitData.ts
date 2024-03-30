import path from 'path'
import { readFile } from 'fs'
import { fileURLToPath } from 'url'
import { pool } from '../src/config/dbConfig.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dataPath = path.resolve(__dirname, 'fruit-data.json')

readFile(dataPath, 'utf8', async (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const fruits = JSON.parse(data)
    for (const fruit of fruits) {
      const { name, nutritions: { calories, fat, sugar, carbohydrates, protein }} = fruit

      const fruitInsert = await pool.query('INSERT INTO fruit (name) VALUES ($1) RETURNING id', [name])
      
      await pool.query('INSERT INTO fruit_nutrition (fruit_id, calories, fat, sugar, carbohydrates, protein) VALUES ($1, $2, $3, $4, $5, $6)', [fruitInsert.rows[0].id, calories, fat, sugar, carbohydrates, protein])

      console.log(`Inserted ${name} into the database.`)
    }
  }
})