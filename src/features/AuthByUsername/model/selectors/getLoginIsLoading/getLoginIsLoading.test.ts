import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import getLoginIsLoading from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('return isLoading', () => {
        const state = createStateForTests<StateSchema>({
            loginForm: {
                isLoading: true,
            },
        });

        expect(getLoginIsLoading(state)).toBe(true);
    });
    test('return false', () => {
        const state = createStateForTests<StateSchema>({});

        expect(getLoginIsLoading(state)).toEqual(false);
    });
});
