import express from 'express';
import validateUserRequest from '../../middlewares/userCreate.validation';
import { AcademicSemesterZodSchemaValidation } from './academicSemes.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const semesterRouter = express.Router();

// userRouter.post('/create-user', UserController.createUser);

semesterRouter.post(
  '/create',
  validateUserRequest(
    AcademicSemesterZodSchemaValidation.createAcademicSemesterZodSchema,
  ),
  AcademicSemesterController.createSemester,
);

export const semesterRoutes = semesterRouter;
