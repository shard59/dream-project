import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { getProfileValidateErrors } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileValidateErrors', () => {
    test('return validate errors', () => {
        const state = createStateForTests<StateSchema>({
            profile: {
                validateErrors: ['NO_DATA', 'INCORRECT_USER_AGE'],
            },
        });

        expect(getProfileValidateErrors(state)).toEqual(['NO_DATA', 'INCORRECT_USER_AGE']);
    });
    test('work with empty state', () => {
        const state = createStateForTests<StateSchema>({
        });

        expect(getProfileValidateErrors(state)).toEqual(undefined);
    });
});
