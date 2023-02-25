import classNames from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = (props: PageErrorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Error message')}</p>
            <Button onClick={refreshPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};

export default PageError;
