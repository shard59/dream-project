import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from '../../../assets/test/avatar-storybook.png';

import Avatar from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    width: 150,
    height: 150,
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    width: 50,
    height: 50,
};
