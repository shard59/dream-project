import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

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
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >{children}
        </button>
    );
};

