import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

const getLoginUsername = (state?: StateSchema) => state?.loginForm?.username || '';

export default getLoginUsername;
