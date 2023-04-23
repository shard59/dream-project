import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/helpers/components/DynamicModuleLoader';
import { DeepPartial } from 'shared/types/DeepPartial/DeepPartial';

const defaultReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{
            ...defaultReducers,
            ...asyncReducers,
        } as ReducersMapObject<StateSchema>}
    >
        <StoryComponent />
    </StoreProvider>
);

export default StoreDecorator;
