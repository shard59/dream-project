import { createContext } from 'react';

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

type ValueOf<T> = T[keyof T]
export type Theme = ValueOf<typeof THEME>

export interface THemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<THemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
