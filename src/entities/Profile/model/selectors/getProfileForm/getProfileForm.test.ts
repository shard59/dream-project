import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import getProfileForm from './getProfileForm';

describe('getProfileForm', () => {
    test('return formData', () => {
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
            profile: { form: data },
        });

        expect(getProfileForm(state)).toEqual(data);
    });
    test('work with empty state', () => {
        const state = createStateForTests<StateSchema>({});

        expect(getProfileForm(state)).toEqual(undefined);
    });
});
