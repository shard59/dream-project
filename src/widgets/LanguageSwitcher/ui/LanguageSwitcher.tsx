import classNames from 'shared/helpers/classNames/classNames';
import Button from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
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
            {t(short ? 'Short Language' : 'Language')}
        </Button>
    );
};

export default memo(LanguageSwitcher);
