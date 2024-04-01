import express from 'express';
import { router as smoothieRouter } from './routes/smoothieRoutes.js'
import { router as fruitRouter } from './routes/fruitRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js';

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/smoothies', smoothieRouter)
app.use('/fruits', fruitRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
