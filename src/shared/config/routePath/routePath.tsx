type AppRoutes = 'main' | 'about' | 'profile' | 'not_found'

const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    profile: '/profile',
    not_found: '*',
} as const;

export default RoutePath;
