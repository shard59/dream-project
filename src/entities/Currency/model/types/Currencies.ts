export const Currencies = {
    RUB: 'RUB',
    USD: 'USD',
    EUR: 'EUR',
} as const;

export type Currency = keyof typeof Currencies
