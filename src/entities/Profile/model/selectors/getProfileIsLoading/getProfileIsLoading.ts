import { StateSchema } from 'app/providers/StoreProvider';

const getProfileIsLoading = (state :StateSchema) => state?.profile?.isLoading || false;

export default getProfileIsLoading;
