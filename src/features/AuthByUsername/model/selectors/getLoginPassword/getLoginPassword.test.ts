import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import getLoginPassword from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('return password', () => {
        const state = createStateForTests<StateSchema>({
            loginForm: {
                password: '123',
            },
        });

        expect(getLoginPassword(state)).toEqual('123');
    });
    test('return empty string', () => {
        const state = createStateForTests<StateSchema>({});

        expect(getLoginPassword(state)).toEqual('');
    });
});
