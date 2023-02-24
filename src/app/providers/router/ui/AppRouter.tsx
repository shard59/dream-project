import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import routePath from 'app/config/routeConfig/routeConfig';

export default function AppRouter() {
    return (
        <Routes>
            {routePath.map(({ path, element }) => (
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
            ))}
        </Routes>
    );
}
