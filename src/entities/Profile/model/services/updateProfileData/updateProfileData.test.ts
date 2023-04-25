import TestAsyncThunk from 'shared/helpers/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData, Profile, ProfileSchema } from 'entities/Profile';
import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import { StateSchema } from 'app/providers/StoreProvider';

const data: Profile = {
    username: 'admin',
    age: 33,
    country: 'Russia',
    lastname: 'Titov',
    first: 'Alesha',
    currency: 'RUB',
    city: 'Moscow',
};

describe('updateProfileData', () => {
    test('success', async () => {
        const state = createStateForTests<StateSchema>({
            profile: {
                form: data,
            },
        });

        const thunk = new TestAsyncThunk(updateProfileData, state);
        thunk.getApi().put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.getApi().put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('fail 403', async () => {
        const state = createStateForTests<StateSchema>({
            profile: {
                form: data,
            },
        });

        const thunk = new TestAsyncThunk(updateProfileData, state);
        thunk.getApi().put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            'SERVER_ERROR',
        ]);
    });

    test('incorrect lasname', async () => {
        const state = createStateForTests<StateSchema>({
            profile: {
                form: { ...data, lastname: '' },
            },
        });

        const thunk = new TestAsyncThunk(updateProfileData, state);
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            'INCORRECT_USER_DATA',
        ]);
    });
});
