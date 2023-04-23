import classNames from 'shared/helpers/classNames/classNames';
import React, { memo, useState } from 'react';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LanguageSwitcher from 'widgets/LanguageSwitcher';
import Button from 'shared/ui/Button';

import { sidebarItemsList } from 'widgets/Sidebar/model/items';
import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
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
                className={cls.collapsedBtn}
                variant="backgroundInverted"
                square
                size="size_l"
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {sidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />)}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};

export default memo(Sidebar);
