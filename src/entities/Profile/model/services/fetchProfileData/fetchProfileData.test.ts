import TestAsyncThunk from 'shared/helpers/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData, Profile } from 'entities/Profile';

const data: Profile = {
    username: 'admin',
    age: 33,
    country: 'Russia',
    lastname: 'Titov',
    first: 'Alesha',
    currency: 'RUB',
    city: 'Moscow',
};

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.getApi().get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.getApi().get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('fail 403', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.getApi().get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
