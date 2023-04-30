import { memo } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import Text from 'shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text text={block.title} align="center" />
            )}
        </div>
    );
});

export default ArticleImageBlockComponent;
