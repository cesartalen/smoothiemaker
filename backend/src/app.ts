import express from 'express';
import { router as smoothieRouter } from './routes/smoothieRoutes'
import { router as fruitRouter } from './routes/fruitRoutes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/smoothies', smoothieRouter)
app.use('/fruits', fruitRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
