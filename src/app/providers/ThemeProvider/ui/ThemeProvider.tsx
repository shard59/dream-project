import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, THEME, Theme, ThemeContext, ThemeContextProps,
} from '../helpers/theme/ThemeContext';
import addTheme from "app/providers/ThemeProvider/helpers/theme/AddTheme";

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const isTheme = (value: any): value is Theme => {
    const isString = typeof value === 'string';
    const existTheme = Object.values(THEME).some((t) => t === value);
    return isString && existTheme;
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

    addTheme(theme)

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
