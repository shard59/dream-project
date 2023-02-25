import classNames from 'shared/helpers/classNames/classNames';
import React, { useState } from 'react';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LanguageSwitcher from 'widgets/LanguageSwitcher';
import Button from 'shared/ui/Button';
import AppLink from 'shared/ui/AppLink';
import RoutePath from 'shared/config/routePath/routePath';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);
    const mods = {
        [cls.collapsed]: collapsed,
    };

    const toggle = () => setCollapsed(!collapsed);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, mods, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggle}
                className={cls.collapsedBtn}
                variant="backgroundInverted"
                square
                size="size_l"
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        to={RoutePath.main}
                        variant="secondary"

                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>{t('Main')}</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        to={RoutePath.about}
                        variant="secondary"
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('About')}</span>
                    </AppLink>
                </div>

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
