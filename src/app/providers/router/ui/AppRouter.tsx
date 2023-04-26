import { memo, useCallback, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from 'app/providers/router/ui/RequireAuth';
import routeConfig, { AppRouteProps } from 'app/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';

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
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
