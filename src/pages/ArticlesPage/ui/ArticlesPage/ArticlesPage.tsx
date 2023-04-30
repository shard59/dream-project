import { memo } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])} />
    );
};

export default memo(ArticlesPage);
