import classNames from 'shared/helpers/classNames/classNames';
import Loader from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <Loader className={classNames(cls.pageLoader, {}, [className])} />
);

export default PageLoader;
