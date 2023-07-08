import express from 'express'
import createUserController from "./users.controller"

const router = express.Router()

router.post('/create-user', createUserController.createUser)

export default router;