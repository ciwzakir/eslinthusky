import ApiError from '../../../errors/ApiError';
import { IUser } from './users.interface';
import { User } from './users.model';
import { generateUserId } from './usres.utils';
import config from '../../../config';

const createUserFunctions = async (user: IUser): Promise<IUser | null> => {
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const userId = await generateUserId();
  user.id = userId;

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user');
  }
  return createdUser;
};

export const userService = {
  createUserFunctions,
};
