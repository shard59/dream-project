import classNames from 'shared/helpers/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';
import cls from './AppLink.module.scss';

type AppLinkVariant = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps{
    className?: string;
    variant?: AppLinkVariant
}

const AppLink = (props: AppLinkProps) => {
    const {
        children,
        className,
        to,
        variant = 'primary',
        ...otherProps
    } = props;
    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[variant]])}
        >
            {children}
        </Link>
    );
};

export default memo(AppLink);
