import dotenv from 'dotenv'
dotenv.config()

const { SERVER_PORT } = process.env

import { app } from "./app";

app.listen(SERVER_PORT)