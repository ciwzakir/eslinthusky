import express from 'express';
import { UserController } from './users.controller';
import { UserValidation } from './user.validation';
import validateUserRequest from '../../middlewares/userCreate.validation';

const userRouter = express.Router();

// userRouter.post('/create-user', UserController.createUser);

userRouter.post(
  '/create-user',
  validateUserRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
);

export const routes = userRouter;
