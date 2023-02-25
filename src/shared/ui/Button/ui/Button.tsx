import classNames from 'shared/helpers/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

type ButtonVariant = 'default' | 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant = 'default',
        ...otherProps
    } = props;

    return (
        <button
            {...otherProps}
            type="button"
            className={classNames(cls.button, {}, [className, cls[variant]])}
        >
            {children}
        </button>
    );
};

export default Button;
