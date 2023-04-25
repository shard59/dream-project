import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { getProfileError } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileError', () => {
    test('return error', () => {
        const state = createStateForTests<StateSchema>({
            profile: { error: 'error' },
        });

        expect(getProfileError(state)).toEqual('error');
    });
    test('work with empty state', () => {
        const state = createStateForTests<StateSchema>({
        });

        expect(getProfileError(state)).toEqual('');
    });
});
