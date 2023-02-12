import {RouteProps} from 'react-router-dom'
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export type AppRoutes = "main" | "about"

export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: <MainPage />
    },
    about: {
        path: RoutePath.main,
        element: <AboutPage />
    },
}