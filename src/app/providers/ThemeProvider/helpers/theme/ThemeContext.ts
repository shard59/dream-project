import { createContext } from 'react';

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
    ORANGE: 'orange',
} as const;

type ValueOf<T> = T[keyof T]
export type Theme = ValueOf<typeof THEME>

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
