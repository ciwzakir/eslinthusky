import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { IAcademicFaculty } from '../acdemicFaculty/academicFaculty.interface';
import { User } from './users.model';

export const lastStudentId = async () => {
  const getlastStudentId = await User.findOne(
    { role: 'student' },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean(); // id true and _id false || Lean Pure JS
  return getlastStudentId?.id ? getlastStudentId.id.substring(4) : undefined;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester,
): Promise<string> => {
  const currentId = (await lastStudentId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementedId}`;
  return incrementedId;
};

export const lastFacultyId = async () => {
  const getlastFacultyId = await User.findOne(
    { role: 'faculty' },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean(); // id true and _id false || Lean Pure JS
  return getlastFacultyId?.id ? getlastFacultyId.id.substring(3) : undefined;
};

export const generateFacultyId = async (
  academicFaculty: IAcademicFaculty,
): Promise<string> => {
  const currentId = (await lastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `${academicFaculty.title
    .substring(0, 2)
    .concat('-')}${incrementedId}`;
  return incrementedId;
};
