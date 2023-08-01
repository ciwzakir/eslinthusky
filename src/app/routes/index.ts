import express from 'express';
import { semesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { routes } from '../modules/users/users.routes';
import { AcademicFacultyRoutes } from '../modules/acdemicFaculty/academicFaculty.routes';
import { academicDepartmentRoutes } from '../modules/acdemicDepartment/academicDepartment.routes';

const combineRoutes = express.Router();
const moduleRouts = [
  {
    path: '/semester/',
    route: semesterRoutes,
  },
  {
    path: '/users/',
    route: routes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
];
moduleRouts.forEach(route => combineRoutes.use(route.path, route.route));
export default combineRoutes;
