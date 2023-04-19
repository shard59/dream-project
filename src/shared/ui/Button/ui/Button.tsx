import classNames from 'shared/helpers/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

type ButtonVariant =
    'default' |
    'clear' |
    'clearInverted' |
    'outline' |
    'background' |
    'backgroundInverted'
type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant = 'default',
        square,
        size = 'size_m',
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean > = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            {...otherProps}
            type="button"
            disabled={disabled}
            className={classNames(cls.button, mods, [className, cls[variant], cls[size]])}
        >
            {children}
        </button>
    );
};

export default Button;
