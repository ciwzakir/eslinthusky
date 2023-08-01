import { Request, Response } from 'express';
import { AcademicService } from './academicSemester.services';
import catchAsync from '../../../shared/tryCatchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { pageOptionValues } from '../../../constant/pagination';
import { IAcademicSemester } from './academicSemester.interface';
import { academicsemesterfilterableFields } from './academicSemester.constant';

const createSemester = catchAsync(async (req: Request, res: Response) => {
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
});
const getSemesterData = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicsemesterfilterableFields);
  const paginationOptions = pick(req.query, pageOptionValues);

  // console.log(paginationOptions);

  const result = await AcademicService.getAllSemesterDataService(
    filters,
    paginationOptions,
  );
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester data retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});
const getSingleSemesterData = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AcademicService.getSingleSemesterService(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: ' One Academic semester data retrieved successfully',
      data: result,
    });
  },
);
const updateSemesterData = catchAsync(async (req: Request, res: Response) => {
  const updatedData = req.body;
  const id = req.params.id;
  const result = await AcademicService.updateSemesterService(id, updatedData);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester data updated successfully',
    data: result,
  });
});
const deleteSemesterData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicService.deleteSemesterService(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester data Deleted successfully',
    data: result,
  });
});
export const AcademicSemesterController = {
  createSemester,
  getSemesterData,
  getSingleSemesterData,
  updateSemesterData,
  deleteSemesterData,
};
