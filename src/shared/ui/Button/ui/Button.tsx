import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

type ButtonVariant = 'clear'

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
            {...otherProps}
            type="button"
            className={classNames(cls.Button, {}, [className, cls[variant]])}
        >
            {children}
        </button>
    );
};
