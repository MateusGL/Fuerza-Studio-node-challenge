import express from 'express'
import { router } from './routes'
import morgan from 'morgan'
import cors from 'cors'

import swaggerUi from 'swagger-ui-express'
const swaggerFile = require('../swagger_output.json')
const { SERVER_PORT } = process.env
swaggerFile.host = `localhost:${SERVER_PORT}`

const app = express()

app.use(cors())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(morgan('combined'))
app.use(express.json())
app.use(router)

export { app }