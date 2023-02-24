type AppRoutes = 'main' | 'about' | 'not_found'

const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    not_found: '*',
} as const;

export default RoutePath;
