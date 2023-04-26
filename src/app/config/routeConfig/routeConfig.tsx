import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import RoutePath from 'shared/config/routePath/routePath';
import ProfilePage from 'pages/ProfilePage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

const routePath: AppRouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];

export default routePath;
