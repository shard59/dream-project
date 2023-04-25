import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileData, Profile } from 'entities/Profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import getProfileForm from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import validateProfileData from 'entities/Profile/model/services/validateProfileData/validateProfileData';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (profileData, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const state = getState();
        const formData = getProfileForm(state);

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e: any) {
            console.log(e);
            return rejectWithValue(['SERVER_ERROR']);
        }
    },
);

export default updateProfileData;
