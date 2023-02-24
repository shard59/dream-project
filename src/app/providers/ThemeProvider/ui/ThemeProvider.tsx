import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, THEME, ThemeContext, THemeContextProps,
} from '../helpers/theme/ThemeContext';

const isTheme = (value: any): value is Theme => {
    const isString = typeof value === 'string';
    const existTheme = Object.values(THEME).some((t) => t === value);
    return isString && existTheme;
};

const getDefaultTheme = (): Theme => {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    return isTheme(theme) ? theme : THEME.LIGHT;
};

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getDefaultTheme());

    const defaultProps = useMemo<THemeContextProps>(() => ({
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
