import { StateSchema } from 'app/providers/StoreProvider';

import createStateForTests from 'shared/helpers/tests/createStateForTests/createStateForTests';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state = createStateForTests<StateSchema>({
            articleDetails: {
                data,
            },
        });
        expect(getArticleDetailsData(state)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state = createStateForTests<StateSchema>({});
        expect(getArticleDetailsData(state)).toEqual(undefined);
    });
    test('should return error', () => {
        const state = createStateForTests<StateSchema>({
            articleDetails: {
                error: 'error',
            },
        });
        expect(getArticleDetailsError(state)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state = createStateForTests<StateSchema>({});
        expect(getArticleDetailsError(state)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state = createStateForTests<StateSchema>({
            articleDetails: {
                isLoading: true,
            },
        });
        expect(getArticleDetailsIsLoading(state)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state = createStateForTests<StateSchema>({});
        expect(getArticleDetailsIsLoading(state)).toEqual(false);
    });
});
