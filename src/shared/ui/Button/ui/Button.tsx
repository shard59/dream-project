import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant = 'clear',
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
