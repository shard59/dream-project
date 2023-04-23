import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'shared/types/DeepPartial/DeepPartial';

type StateOrNestedSchema = StateSchema[keyof StateSchema] | StateSchema

export default function createStateForTests<T extends StateOrNestedSchema>(state: DeepPartial<T>): T {
    return state as T;
}
