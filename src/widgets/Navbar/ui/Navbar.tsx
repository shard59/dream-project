import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    variant="secondary"
                >
                    {t('Main')}
                </AppLink>
                <AppLink
                    to="/about"
                    variant="secondary"
                >
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
