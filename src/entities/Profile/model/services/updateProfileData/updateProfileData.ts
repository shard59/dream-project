import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileData, Profile } from 'entities/Profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import getProfileForm from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';

const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (profileData, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const state = getState();
        const formData = getProfileForm(state);

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e: any) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

export default updateProfileData;
