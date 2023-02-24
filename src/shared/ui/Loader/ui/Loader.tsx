import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div>
        <div className={classNames(cls.loader, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
