import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: ' Zod Error comes from title , Check title key spelling',
    }),
    year: z.number({
      required_error: 'Zod Error comes from Year  , Check Year key spelling',
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Zod Error comes from Code , Check Code key spelling',
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'Zod Start Month Error, Check StartMonth',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'Zod Start Month Error, Check EndMonth',
    }),
  }),
});
export const AcademicSemesterZodSchemaValidation = {
  createAcademicSemesterZodSchema,
};
