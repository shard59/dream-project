import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Button from './Button';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    variant: 'clearInverted',
};

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    variant: 'background',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    variant: 'backgroundInverted',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    variant: 'backgroundInverted',
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    variant: 'backgroundInverted',
    square: true,
    size: 'size_l',
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    variant: 'backgroundInverted',
    square: true,
    size: 'size_xl',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'size_l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'size_xl',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator('dark')];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    disabled: true,
};
