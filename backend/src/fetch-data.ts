import { writeFile } from 'fs'


fetch('https://fruityvice.com/api/fruit/all')
  .then(response => response.json())
  .then(data => {
      writeFile('fruit-data.json', JSON.stringify(data), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Data has been fetched and written to fruit-data.json')
        }
      })
    })
  .catch(error => console.error(error))