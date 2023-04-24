export const Countries = {
    Russia: 'Russia',
    Belarus: 'Belarus',
    Ukraine: 'Ukraine',
    Kazakhstan: 'Kazakhstan',
    Armenia: 'Armenia',
} as const;

export type Country = keyof typeof Countries
