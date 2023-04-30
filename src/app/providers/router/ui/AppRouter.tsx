import { memo, useCallback, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from 'app/providers/router/ui/RequireAuth';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import { AppRouteProps, routePath } from 'app/config/routeConfig/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routePath).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
