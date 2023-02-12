import {Route, Routes, Link} from 'react-router-dom'
import './styles/index.scss'
import {Suspense} from 'react';
import {UseTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = UseTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Suspense fallback={<div>"Loading..."</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}