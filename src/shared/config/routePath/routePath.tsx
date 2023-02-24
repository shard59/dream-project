type AppRoutes = 'main' | 'about' | 'not_found'

export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    not_found: '*',
} as const;
