import { profileActions, profileReducer } from 'entities/Profile/model/slice/ProfileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import fetchProfileData from './model/services/fetchProfileData/fetchProfileData';
import updateProfileData from './model/services/updateProfileData/updateProfileData';
import ProfileCard from './ui/ProfileCard';
import getProfileIsLoading from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import getProfileData from './model/selectors/getProfileData/getProfileData';
import getProfileError from './model/selectors/getProfileError/getProfileError';
import getProfileReadonly from './model/selectors/getProfileReadonly/getProfileReadonly';
import getProfileValidateErrors from './model/selectors/getProfileValidateErrors/getProfileValidateErrors';

export {
    Profile,
    ProfileSchema,
    profileActions,
    profileReducer,
    fetchProfileData,
    updateProfileData,
    ProfileCard,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
};
