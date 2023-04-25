import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectValue}>

jest.mock('axios');

export default class TestAsyncThunk<Return, Arg, RejectValue> {
    private readonly dispatch: jest.MockedFn<any>;

    private readonly getState: () => StateSchema | undefined;

    private readonly api: jest.MockedFunctionDeep<AxiosStatic>;

    private readonly navigate;

    constructor(
        private actionCreator: ActionCreatorType<Return, Arg, RejectValue>,
        private state?: StateSchema,
    ) {
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => this.state);
        this.api = jest.mocked(axios, true);
        this.navigate = jest.fn();
    }

    public async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        return action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );
    }

    public getDispatch(): jest.MockedFn<any> {
        return this.dispatch;
    }

    public getApi(): jest.MockedFunctionDeep<AxiosStatic> {
        return this.api;
    }
}
