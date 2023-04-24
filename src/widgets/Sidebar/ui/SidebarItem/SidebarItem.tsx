import { useTranslation } from 'react-i18next';
import AppLink from 'shared/ui/AppLink';
import React, { memo } from 'react';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import classNames from 'shared/helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const {
        text, path, Icon, authOnly,
    } = item;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && authOnly) {
        return null;
    }

    return (
        <div className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <AppLink
                to={path}
                variant="secondary"

            >
                <Icon className={cls.icon} />
                <span className={cls.link}>{t(text)}</span>
            </AppLink>
        </div>
    );
};

export default memo(SidebarItem);
