import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { LoginSchema } from 'features/AuthByUsername';
import loginByUsername from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

describe('LoginSlice.test', () => {
    test('set username', () => {
        const state = createStateForTests<LoginSchema>({
            username: '123',
        });

        expect(
            loginReducer(state, loginActions.setUsername('admin')),
        ).toEqual({ username: 'admin' });
    });
    test('set password', () => {
        const state = createStateForTests<LoginSchema>({
            password: '123',
        });

        expect(
            loginReducer(state, loginActions.setPassword('222')),
        ).toEqual({ password: '222' });
    });
    test('set isLoading', () => {
        const state = createStateForTests<LoginSchema>({
            isLoading: false,
        });

        expect(
            loginReducer(state, loginByUsername.pending),
        ).toEqual({ isLoading: true });
    });
});
