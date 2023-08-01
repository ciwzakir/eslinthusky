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
    year: z.string({
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

const updateteAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterTitle] as [string, ...string[]], {
          required_error:
            ' Zod Error comes from title , Check title key spelling',
        })
        .optional(),
      year: z
        .string({
          required_error:
            'Zod Error comes from Year  , Check Year key spelling',
        })
        .optional(),
      code: z
        .enum([...academicSemesterCode] as [string, ...string[]], {
          required_error: 'Zod Error comes from Code , Check Code key spelling',
        })
        .optional(),
      startMonth: z
        .enum([...academicSemesterMonth] as [string, ...string[]], {
          required_error: 'Zod Start Month Error, Check StartMonth',
        })
        .optional(),
      endMonth: z
        .enum([...academicSemesterMonth] as [string, ...string[]], {
          required_error: 'Zod Start Month Error, Check EndMonth',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: ' Please update both title and code ',
    },
  );

export const AcademicSemesterZodSchemaValidation = {
  createAcademicSemesterZodSchema,
  updateteAcademicSemesterZodSchema,
};
