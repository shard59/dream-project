import { Currencies } from 'entities/Currency/model/types/Currencies';
import { Countries } from 'entities/Country/model/types/Countries';

export type ValidateProfileError =
    'INCORRECT_USER_DATA' |
    'INCORRECT_USER_AGE' |
    'INCORRECT_USER_COUNTRY' |
    'NO_DATA' |
    'SERVER_ERROR'

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: keyof typeof Currencies;
    country?: keyof typeof Countries;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
