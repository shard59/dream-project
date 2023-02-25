import React from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import AppLink from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import RoutePath from 'shared/config/routePath/routePath';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links} />
        </div>
    );
};

export default Navbar;
