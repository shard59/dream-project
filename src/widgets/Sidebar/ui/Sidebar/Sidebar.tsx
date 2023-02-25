import classNames from 'shared/helpers/classNames/classNames';
import React, { useState } from 'react';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LanguageSwitcher from 'widgets/LanguageSwitcher';
import Button from 'shared/ui/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
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
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
