import { StateSchema } from 'app/providers/StoreProvider';

const getProfileReadonly = (state :StateSchema) => state?.profile?.readonly ?? true;

export default getProfileReadonly;
