import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, THEME, ThemeContext, THemeContextProps} from "./ThemeContext";

const isTheme = (value: any): value is Theme => typeof value === 'string' && Object.values(THEME).some(t => t === value)

const getDefaultTheme = (): Theme => {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
    return isTheme(theme) ? theme : THEME.LIGHT;
}

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(getDefaultTheme());



    const defaultProps = useMemo<THemeContextProps>(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;