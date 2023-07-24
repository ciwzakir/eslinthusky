import { NextFunction, Request, Response } from 'express';
import { userService } from './users.services';
import catchAsync from '../../../shared/tryCatchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...users } = req.body;
    const result = await userService.createUserFunctions(users);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
    next();
  },
);

export const UserController = {
  createUser,
};
