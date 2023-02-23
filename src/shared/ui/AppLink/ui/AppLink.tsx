import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export type AppLinkVariant = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps{
    className?: string;
    variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {children,
        className,
        to,
        variant = 'primary',
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className,cls[variant]])}
            {...otherProps}
            >
            {children}
        </Link>
    );
};

