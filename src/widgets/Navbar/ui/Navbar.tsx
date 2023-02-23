import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    variant={'secondary'}
                >Главная</AppLink>
                <AppLink
                    to={'/about'}
                    variant={'secondary'}
                >О нас</AppLink>
            </div>
        </div>
    );
};

