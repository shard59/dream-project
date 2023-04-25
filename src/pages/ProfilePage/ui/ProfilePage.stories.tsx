import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/test/avatar-storybook.png';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 33,
            country: 'Russia',
            lastname: 'Titov',
            first: 'Alesha',
            currency: 'RUB',
            city: 'Moscow',
        },
    },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator('dark'), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 33,
            country: 'Russia',
            lastname: 'Titov',
            first: 'Alesha',
            currency: 'RUB',
            city: 'Moscow',
        },
    },
})];
