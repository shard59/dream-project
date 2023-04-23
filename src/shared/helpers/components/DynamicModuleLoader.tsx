import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import useAppDispatch from 'shared/helpers/hooks/useAppDispatch';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    children?: ReactNode
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.add(name as StateSchemaKey, reducer);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line
    return (<>{children}</>);
};

export default DynamicModuleLoader;
