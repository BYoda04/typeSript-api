import express from 'express'

// routes
import diaryRouter from './routes/diary.routes'

// const
const app = express()

// utils
app.use(express.json())

const PORT = 4001

// routes
app.use('/api/v1/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server on port http://localhost:${PORT}`)
})
