import { Request, Response } from 'express'
import userservice from './users.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const { users } = req.body
    const result = await userservice.createUserFunctions(users)
    res.status(200).json({
      success: true,
      messsage: 'created a new user',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      messsage: 'Failed to create user',
    })
  }
}
export default {
  createUser,
}
