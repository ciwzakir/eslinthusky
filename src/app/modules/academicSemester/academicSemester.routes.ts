import express from 'express';
import validateUserRequest from '../../middlewares/userCreate.validation';
import { AcademicSemesterZodSchemaValidation } from './academicSemes.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create',
  validateUserRequest(
    AcademicSemesterZodSchemaValidation.createAcademicSemesterZodSchema,
  ),
  AcademicSemesterController.createSemester,
);
router.get('/all/:id', AcademicSemesterController.getSingleSemesterData);
router.patch(
  '/all/:id',
  validateUserRequest(
    AcademicSemesterZodSchemaValidation.updateteAcademicSemesterZodSchema,
  ),
  AcademicSemesterController.updateSemesterData,
);
router.delete('/all/:id', AcademicSemesterController.deleteSemesterData);

router.get('/all', AcademicSemesterController.getSemesterData);

export const semesterRoutes = router;
