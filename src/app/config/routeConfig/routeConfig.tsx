import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import RoutePath from 'shared/config/routePath/routePath';
import ProfilePage from 'pages/ProfilePage';

const routePath: RouteProps[] = [
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
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];

export default routePath;
