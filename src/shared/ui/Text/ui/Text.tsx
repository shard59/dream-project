import classNames from 'shared/helpers/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error'

type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant
    align?: TextAlign
}

const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
    } = props;

    const additionalClassnames: (string | undefined)[] = [className, cls[variant], cls[align]];

    return (
        <div className={classNames(cls.text, {}, additionalClassnames)}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
};

export default memo(Text);
