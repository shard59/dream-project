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
        let newTheme: Theme = 'light';

        switch (theme) {
        case 'light':
            newTheme = 'dark';
            break;
        case 'dark':
            newTheme = 'orange';
            break;
        case 'orange':
            newTheme = 'light';
            break;
        default:
            newTheme = 'light';
        }

        setTheme?.(newTheme);

        addTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || 'light',
        toggleTheme,
    };
}
