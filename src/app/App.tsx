import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import AppRouter from 'app/providers/router';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import useAppDispatch from 'shared/helpers/hooks/useAppDispatch';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
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
};

export default App;
