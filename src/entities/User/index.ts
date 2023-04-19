import getUserAuthData from './model/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './model/slice/UserSlice';
import { UserSchema, User } from './model/types/user';

export {
    User,
    UserSchema,
    getUserAuthData,
    userReducer,
    userActions,
};
