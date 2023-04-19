import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Text from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Lorem Lorem',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Lorem Lorem',
    variant: 'error',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem Lorem',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Lorem Lorem',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];
