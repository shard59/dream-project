import { Story } from '@storybook/react';
import classNames from 'shared/helpers/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider/helpers/theme/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={classNames('app', {}, [theme])}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);

export default ThemeDecorator;
