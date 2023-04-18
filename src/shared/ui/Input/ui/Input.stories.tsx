import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Input from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text:',
    value: 'some text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Type text:',
    value: 'some text',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];
