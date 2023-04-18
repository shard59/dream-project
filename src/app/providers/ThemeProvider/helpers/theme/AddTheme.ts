import { THEME, Theme } from 'app/providers/ThemeProvider/helpers/theme/ThemeContext';

const addTheme = (theme: Theme) => {
    document.body.classList.remove(...Object.values(THEME));
    document.body.classList.add(theme);
};

export default addTheme;
