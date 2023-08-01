import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import {
  academicSemesterTitleCodeMapper,
  academicsearchfields,
} from './academicSemester.constant';
import {
  IAcademicSemester,
  IAcademicSemesterFilters,
} from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import {
  IGenericResponse,
  IPaginationOptions,
} from '../../../interfaces/paginationOptions';
import { pageHelper } from '../../../shared/paginationOption';
import { SortOrder } from 'mongoose';

const createAcademicSemesterService = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getSingleSemesterService = async (
  id: string,
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateSemesterService = async (
  id: string,
  payload: Partial<IAcademicSemester>,
): Promise<IAcademicSemester | null> => {
  if (
    payload.title &&
    payload.code &&
    academicSemesterTitleCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSemesterService = async (
  id: string,
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemester.findByIdAndDelete(id, { new: true });
  return result;
};

const getAllSemesterDataService = async (
  filters: IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const searchAndFilters = [];
  if (searchTerm) {
    searchAndFilters.push({
      $or: academicsearchfields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    searchAndFilters.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    pageHelper.pagination(paginationOptions);

  const sortconditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortconditions[sortBy] = sortOrder;
  }
  const wherecondition =
    searchAndFilters.length > 0 ? { $and: searchAndFilters } : {};
  const result = await AcademicSemester.find(wherecondition)
    .sort(sortconditions)
    .skip(skip)
    .limit(limit);
  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const AcademicService = {
  createAcademicSemesterService,
  getAllSemesterDataService,
  getSingleSemesterService,
  updateSemesterService,
  deleteSemesterService,
};
