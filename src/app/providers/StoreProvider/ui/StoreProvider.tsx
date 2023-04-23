import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
    asyncReducers?: ReducersMapObject<StateSchema>
}

const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const navigate = useNavigate();

    const store = createReduxStore(initialState, asyncReducers, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
