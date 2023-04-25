import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import {
    Profile, profileActions, profileReducer, ProfileSchema, updateProfileData,
} from 'entities/Profile';

const data: Profile = {
    username: 'admin',
    age: 33,
    country: 'Russia',
    lastname: 'Titov',
    first: 'Alesha',
    currency: 'RUB',
    city: 'Moscow',
};

describe('ProfileSlice', () => {
    test('set readonly', () => {
        const state = createStateForTests<ProfileSchema>({
            readonly: false,
        });

        expect(
            profileReducer(state, profileActions.setReadonly(true)),
        ).toEqual({ readonly: true });
    });
    test('cancel edit', () => {
        const state = createStateForTests<ProfileSchema>({});

        expect(
            profileReducer(state, profileActions.cancelEdit()),
        ).toEqual({ readonly: true, validateErrors: undefined });
    });
    test('update profile', () => {
        const state = createStateForTests<ProfileSchema>({
            data, form: data,
        });

        expect(
            profileReducer(state, profileActions.updateProfile({
                ...data, username: 'qwerty',
            })),
        ).toEqual({ data, form: { ...data, username: 'qwerty' } });
    });
    test('update profile service pending', () => {
        const state = createStateForTests<ProfileSchema>({
            isLoading: false,
            validateErrors: ['SERVER_ERROR'],
        });

        expect(
            profileReducer(
                state,
                updateProfileData.pending,
            ),
        ).toEqual({ isLoading: true, validateErrors: undefined });
    });
    test('update profile service fulfilled', () => {
        const state = createStateForTests<ProfileSchema>({
            isLoading: true,
        });

        expect(
            profileReducer(
                state,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
