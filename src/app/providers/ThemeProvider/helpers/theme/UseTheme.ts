import { useContext } from 'react';
import addTheme from 'app/providers/ThemeProvider/helpers/theme/AddTheme';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext,
} from './ThemeContext';

interface UseThemeResult {
    toggleTheme?: () => void
    theme: Theme
}

export default function UseTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        addTheme(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
