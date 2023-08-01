import {
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
  IAcademicSemesterTitle,
} from './academicSemester.interface';

export const academicSemesterMonth: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitle: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summar',
  'Fall',
];

export const academicSemesterCode: IAcademicSemesterCode[] = ['01', '02', '03'];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};

export const academicsemesterfilterableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
  'startMonth',
  'endMonth',
];

export const academicsearchfields = ['title', 'code', 'startMonth', 'endMonth'];
