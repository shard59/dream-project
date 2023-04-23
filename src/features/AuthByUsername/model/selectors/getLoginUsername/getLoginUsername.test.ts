import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import getLoginUsername from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('return username', () => {
        const state = createStateForTests<StateSchema>({
            loginForm: {
                username: 'admin',
            },
        });

        expect(getLoginUsername(state)).toEqual('admin');
    });
    test('return empty string', () => {
        const state = createStateForTests<StateSchema>({});

        expect(getLoginUsername(state)).toEqual('');
    });
});
