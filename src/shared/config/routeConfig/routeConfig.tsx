import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export type AppRoutes = 'main' | 'about' | 'not_found'

export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    not_found: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    about: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    not_found: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
