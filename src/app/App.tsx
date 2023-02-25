import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { UseTheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/helpers/classNames/classNames';
import AppRouter from 'app/providers/router';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';

const App = () => {
    const { theme } = UseTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
