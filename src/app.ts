import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandlerMiddleware from './app/middlewares/globalErrorHandler';
import combineRoutes from './app/routes';
import httpStatus from 'http-status';
// import { generateStudentId } from './app/modules/users/user.utils';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/', combineRoutes);

app.use(globalErrorHandlerMiddleware);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// const academicSemester = {
//   title: 'Autumn',
//   code: '01',
//   year: '2025',
//   startMonth: 'January',
//   endMonth: 'December',
// };

// const testingId = async () => {
//   const testid = await generateStudentId(academicSemester);
//   console.log(testid);
// };

// testingId();
// testingId();

export default app;
