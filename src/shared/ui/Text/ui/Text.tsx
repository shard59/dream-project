import classNames from 'shared/helpers/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error'

type TextAlign = 'left' | 'center' | 'right';

type TextSize = 'size_m' | 'size_l'

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
}

const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        size = 'size_m',
    } = props;

    const additionalClassnames: (string | undefined)[] = [
        className,
        cls[variant],
        cls[align],
        cls[size],
    ];

    return (
        <div className={classNames(cls.text, {}, additionalClassnames)}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
};

export default memo(Text);
