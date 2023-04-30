import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import RoutePath from 'shared/config/routePath/routePath';
import ProfilePage from 'pages/ProfilePage';
import ArticlesPage from 'pages/ArticlesPage';
import ArticleDetailsPage from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export const routePath: AppRouteProps[] = [
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
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: RoutePath.article_details,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
