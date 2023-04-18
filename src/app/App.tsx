import './styles/index.scss';
import { Suspense } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import AppRouter from 'app/providers/router';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';

const App = () => (
    <div className={classNames('app')}>
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
