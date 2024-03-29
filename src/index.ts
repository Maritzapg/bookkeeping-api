import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { json } from 'body-parser'
import { router } from './routes/tasks.router'

dotenv.config()

const app = express()
app.use(json())
app.use(cors())

const port = process.env.PORT

;(async () => {
  try {
    app.use('', router)

    // Start the server
    app
      .listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
      })
      .on('error', error => {
        console.error('Error in http server, shutting down', error)
        process.exit()
      })
  } catch (error: any) {
    console.error('Something went wrong', error)
    process.exit()
  }
})()
