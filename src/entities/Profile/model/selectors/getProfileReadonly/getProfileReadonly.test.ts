import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { getProfileReadonly } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileReadonly', () => {
    test('return readonly', () => {
        const state = createStateForTests<StateSchema>({
            profile: { readonly: false },
        });

        expect(getProfileReadonly(state)).toEqual(false);
    });
    test('work with empty state', () => {
        const state = createStateForTests<StateSchema>({
        });

        expect(getProfileReadonly(state)).toEqual(true);
    });
});
