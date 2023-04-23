import classNames from 'shared/helpers/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error'

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant
}

const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
    } = props;
    return (
        <div className={classNames(cls.text, { [cls[variant]]: true }, [className])}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
};

export default memo(Text);
