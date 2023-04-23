import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export default function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    const keysToRemove: Set<StateSchemaKey> = new Set();

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.size > 0) {
                state = { ...state };

                keysToRemove.forEach((key) => delete state[key]);
                keysToRemove.clear();
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.add(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
