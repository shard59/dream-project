import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import AppRouter from 'app/providers/router';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import { getUserInit, userActions } from 'entities/User';
import useAppDispatch from 'shared/helpers/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

const App = () => {
    const dispatch = useAppDispatch();
    const init = useSelector(getUserInit);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {init && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
