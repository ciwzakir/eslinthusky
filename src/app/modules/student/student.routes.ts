import express from 'express';
import { StudentController } from './student.controller';
import { StudentValidaion } from './student.validation';
import validateUserRequest from '../../middlewares/userCreate.validation';
const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateUserRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent,
);

export const StudentRoutes = router;
