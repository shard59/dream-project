import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;

export default getLoginIsLoading;
