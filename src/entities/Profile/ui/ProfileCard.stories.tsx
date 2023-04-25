import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from 'shared/assets/test/avatar-storybook.png';
import ProfileCard from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 33,
        country: 'Russia',
        lastname: 'Titov',
        first: 'Alesha',
        avatar,
        currency: 'RUB',
        city: 'Moscow',
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'err',
};
