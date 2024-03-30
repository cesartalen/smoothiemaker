import { writeFile } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const output = path.resolve(__dirname, 'fruit-data.json')

fetch('https://fruityvice.com/api/fruit/all')
  .then(response => response.json())
  .then(data => {
    writeFile(output, JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Data has been fetched and written to fruit-data.json')
      }
    })
  })
  .catch(error => console.error(error))
