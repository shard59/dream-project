import { VFC, SVGProps } from 'react';
import RoutePath from 'shared/config/routePath/routePath';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
    },
];
