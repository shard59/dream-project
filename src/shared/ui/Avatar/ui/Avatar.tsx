import classNames from 'shared/helpers/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    width?: number;
    height?: number;
    alt?: string
}

const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        height,
        width,
        alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width, height,
    }), [width, height]);

    return (
        <img
            style={styles}
            alt={alt}
            src={src}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};

export default Avatar;
