import express from 'express';
import { UserController } from './users.controller';
import { UserValidation } from './user.validation';
import validateUserRequest from '../../middlewares/userCreate.validation';

const router = express.Router();

// userRouter.post('/create-user', UserController.createUser);

// userRouter.post(
//   '/create-user',
//   validateUserRequest(UserValidation.createUserZodSchema),
//   UserController.createUser,
// );

// userRouter.get('/users', UserController.getAllUsersController);

router.post(
  '/create-student',
  validateUserRequest(UserValidation.createUserZodSchema),
  UserController.createStudent,
);

router.post(
  '/create-faculty',
  validateUserRequest(UserValidation.createFacultyZodSchema),
  UserController.createFaculy,
);

router.post(
  '/create-admin',
  validateUserRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin,
);

export const routes = router;
