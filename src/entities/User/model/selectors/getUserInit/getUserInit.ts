import { StateSchema } from 'app/providers/StoreProvider';

const getUserInit = (state: StateSchema) => state.user._init;

export default getUserInit;
