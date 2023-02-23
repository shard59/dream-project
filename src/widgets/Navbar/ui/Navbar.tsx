import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                variant="secondary"
            >
                Главная
            </AppLink>
            <AppLink
                to="/about"
                variant="secondary"
            >
                О нас
            </AppLink>
        </div>
    </div>
);
