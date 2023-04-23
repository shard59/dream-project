import classNames from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import getProfileData from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import getProfileError from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import getProfileIsLoading from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import Button from 'shared/ui/Button';
import Text from 'shared/ui/Text';
import Input from 'shared/ui/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button
                    variant="outline"
                    className={cls.editBtn}
                >
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
