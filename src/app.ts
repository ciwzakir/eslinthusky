import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/users/users.routes'
import router from './app/modules/users/users.routes'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users/', usersRouter)
app.get('/', async(req: Request, res: Response) => {

  res.send('Hello World!')
})

export default app
