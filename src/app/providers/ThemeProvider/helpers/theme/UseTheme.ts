import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, THEME, Theme, ThemeContext,
} from './ThemeContext';

interface UseThemeResult {
    toggleTheme?: () => void
    theme: Theme
}

export default function UseTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
