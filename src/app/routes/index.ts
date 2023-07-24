import express from 'express';
import { semesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { routes } from '../modules/users/users.routes';

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
];
moduleRouts.forEach(route => combineRoutes.use(route.path, route.route));
export default combineRoutes;
