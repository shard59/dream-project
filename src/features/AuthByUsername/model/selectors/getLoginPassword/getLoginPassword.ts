import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';

export default getLoginPassword;
