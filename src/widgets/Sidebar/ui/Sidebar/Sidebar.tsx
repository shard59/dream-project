import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const mods = {
        [cls.collapsed]: collapsed
    }

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            className={classNames(cls.Sidebar, mods, [className])
            }>
        <button onClick={toggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

