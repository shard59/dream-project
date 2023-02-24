import classNames from 'shared/helpers/classNames/classNames';
import Button from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            variant="clear"
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};

export default LanguageSwitcher;
