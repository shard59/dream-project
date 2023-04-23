import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import USER_LOCALSTORAGE_KEY from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsername {
    username: string
    password: string
}

const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            dispatch,
        } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e: any) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

export default loginByUsername;
