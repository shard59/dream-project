import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps,
} from '../helpers/theme/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const isTheme = (value: any): value is Theme => {
    const isString = typeof value === 'string';
    const themes: Theme[] = ['light', 'dark'];
    return isString && themes.some((t) => t === value);
};

const getDefaultTheme = (): Theme => {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    return isTheme(theme) ? theme : 'light';
};

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || getDefaultTheme());

    const defaultProps = useMemo<ThemeContextProps>(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
