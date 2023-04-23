import loginByUsername from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { userActions } from 'entities/User';
import TestAsyncThunk from 'shared/helpers/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername.test', () => {
    test('login success', async () => {
        const userData = { username: 'admin', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.getApi().post.mockReturnValue(Promise.resolve({ data: userData }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.getDispatch()).toHaveBeenCalledTimes(3);
        expect(thunk.getDispatch()).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.getApi().post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('login failed 403', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.getApi().post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.getDispatch()).toHaveBeenCalledTimes(2);
        expect(thunk.getApi().post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
