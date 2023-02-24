import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.wrapper, {}, [className])}>
        <div className={cls.Loader}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
