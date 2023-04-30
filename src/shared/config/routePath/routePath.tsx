type AppRoutes = 'main' | 'about' | 'profile' | 'articles' | 'article_details' | 'not_found'

const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    profile: '/profile',
    articles: '/articles',
    article_details: '/articles/:id',
    not_found: '*',
} as const;

export default RoutePath;
