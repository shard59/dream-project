import { Story } from '@storybook/react';
import classNames from 'shared/helpers/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider/helpers/theme/ThemeContext';

const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={classNames('app', {}, [theme])}>
        <StoryComponent />
    </div>
);

export default ThemeDecorator;
