import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Navbar from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const AuthNavBar = Template.bind({});
AuthNavBar.decorators = [StoreDecorator({
    user: { authData: {} },
})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator('dark')];
