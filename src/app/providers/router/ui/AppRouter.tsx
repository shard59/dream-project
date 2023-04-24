import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import routePath from 'app/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export default memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => routePath.reduce<JSX.Element[]>((acc, route) => {
        const { path, authOnly, element } = route;

        if ((authOnly && !isAuth) || !path) {
            return acc;
        }

        const elem = (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        );

        acc.push(elem);

        return acc;
    }, []), [isAuth]);

    return (
        <Routes>
            {routes}
        </Routes>
    );
});
