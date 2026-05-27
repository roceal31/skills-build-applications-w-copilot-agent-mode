import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = Number(process.env.PORT || 8000)
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit-tracker'

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    frontendPort: 5173,
    backendPort: port,
    mongoPort: 27017
  })
})

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected at', mongoUri)
    app.listen(port, () => {
      console.log(`Backend listening on http://localhost:${port}`)
    })
  })
  .catch(error => {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  })
