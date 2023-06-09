import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import Icon from 'shared/ui/Icon/Icon';
import ArticleCodeBlockComponent from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import useAppDispatch from 'shared/helpers/hooks/useAppDispatch';
import Avatar from 'shared/ui/Avatar';
import classNames from 'shared/helpers/classNames/classNames';
import Text from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/helpers/components/DynamicModuleLoader';
import fetchArticleById from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case 'CODE':
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case 'IMAGE':
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case 'TEXT':
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align="center"
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    {article?.img && (
                        <Avatar
                            width={200}
                            height={200}
                            src={article.img}
                            className={cls.avatar}
                        />
                    )}
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size="size_l"
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetails);
