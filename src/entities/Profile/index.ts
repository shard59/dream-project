import { profileActions, profileReducer } from 'entities/Profile/model/slice/ProfileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import fetchProfileData from './model/services/fetchProfileData/fetchProfileData';
import ProfileCard from './ui/ProfileCard';

export {
    Profile,
    ProfileSchema,
    profileActions,
    profileReducer,
    fetchProfileData,
    ProfileCard,
};
