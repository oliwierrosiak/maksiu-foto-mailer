import express from 'express'
import startServer from './server/startServer.js'
import router from './routes/routes.js'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(router)


startServer()