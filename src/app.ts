import express from 'express'
import dotenv from 'dotenv'
import GetPingRoute from './routes/get-ping.route'
import httpContext from 'express-http-context'
import type { NextFunction, Request, RequestHandler, Response } from 'express'

dotenv.config()
const app = express()


const EXPRESS_PORT = process.env.EXPRESS_PORT

app.use(express.json({ limit: '50mb' }) as RequestHandler)
app.use(express.urlencoded({ extended: false }) as RequestHandler)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(httpContext.middleware)

//ROUTES
app.use(GetPingRoute)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  const status = 500
  console.log(error)
  res.status(status).json({ error: error.message })
  next()
})

app.listen(EXPRESS_PORT, () => {
  console.log(`Server listening on port ${EXPRESS_PORT}`);
})

export default app
