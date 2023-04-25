import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { getProfileIsLoading } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileIsLoading', () => {
    test('return isLoading', () => {
        const state = createStateForTests<StateSchema>({
            profile: { isLoading: true },
        });

        expect(getProfileIsLoading(state)).toEqual(true);
    });
    test('work with empty state', () => {
        const state = createStateForTests<StateSchema>({
        });

        expect(getProfileIsLoading(state)).toEqual(false);
    });
});
