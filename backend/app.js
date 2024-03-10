import express from 'express'
import cors from 'cors'
import errorHandler from './utils/errorHandler.js'
import catchAsync from './utils/catchAsync.js'
import notFound from './utils/notFound.js'

const app = express()

app.use(express.json())
app.use(cors({ origin: ['http://localhost:5173'] }))

app.use(
    '/api/calculate',
    catchAsync(async (req, res, next) => {
        res.status(200).json('success')
    })
)

app.use(notFound)
app.use(errorHandler)

export default app
