import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/helpers/components/DynamicModuleLoader';
import { DeepPartial } from 'shared/types/DeepPartial/DeepPartial';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const defaultReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
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
