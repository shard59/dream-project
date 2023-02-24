import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routePath/routePath';
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
                    to={RoutePath.main}
                    variant="secondary"
                >
                    {t('Main')}
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    variant="secondary"
                >
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
