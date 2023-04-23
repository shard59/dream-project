import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: keyof typeof Currency;
    country: keyof typeof Country;
    city: string;
    username:string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}
