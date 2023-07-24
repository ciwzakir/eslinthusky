import { NextFunction, Request, Response } from 'express';
import { AcademicService } from './academicSemester.services';
import catchAsync from '../../../shared/tryCatchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicService.createAcademicSemesterService(
      academicSemesterData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
    next();
  },
);
export const AcademicSemesterController = {
  createSemester,
};
