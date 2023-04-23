import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import getLoginError from './getLoginError';

describe('getLoginError.test', () => {
    test('return error', () => {
        const state = createStateForTests<StateSchema>({
            loginForm: {
                error: 'error',
            },
        });

        expect(getLoginError(state)).toEqual('error');
    });
    test('return undefined', () => {
        const state = createStateForTests<StateSchema>({});

        expect(getLoginError(state)).toEqual(undefined);
    });
});
