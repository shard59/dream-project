import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { User } from 'entities/User';

const getUserAuthData = (state: StateSchema) => state?.user?.authData;

export default getUserAuthData;
