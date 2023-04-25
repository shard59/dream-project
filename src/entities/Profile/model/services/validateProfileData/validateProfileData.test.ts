import { Profile } from 'entities/Profile';
import validateProfileData from './validateProfileData';

const data: Profile = {
    username: 'admin',
    age: 33,
    country: 'Russia',
    lastname: 'Titov',
    first: 'Alesha',
    currency: 'RUB',
    city: 'Moscow',
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('incorrect firstname', async () => {
        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual(['INCORRECT_USER_DATA']);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual(['INCORRECT_USER_AGE']);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual(['INCORRECT_USER_COUNTRY']);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result.sort()).toEqual(['INCORRECT_USER_COUNTRY', 'INCORRECT_USER_AGE', 'INCORRECT_USER_DATA'].sort());
    });
});
