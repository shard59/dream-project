import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

const getLoginError = (state: StateSchema) => state?.loginForm?.error;

export default getLoginError;
