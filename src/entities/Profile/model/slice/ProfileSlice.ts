import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import loginByUsername from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { fetchProfileData } from 'entities/Profile';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
