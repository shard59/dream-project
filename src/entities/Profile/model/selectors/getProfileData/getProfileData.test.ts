import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { getProfileData, Profile, ProfileSchema } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileData', () => {
    test('return data', () => {
        const data: Profile = {
            username: 'admin',
            age: 33,
            country: 'Russia',
            lastname: 'Titov',
            first: 'Alesha',
            currency: 'RUB',
            city: 'Moscow',
        };

        const state = createStateForTests<StateSchema>({
            profile: { data },
        });

        expect(getProfileData(state)).toEqual(data);
    });
    test('work with empty state', () => {
        const state = createStateForTests<StateSchema>({});

        expect(getProfileData(state)).toEqual(undefined);
    });
});
