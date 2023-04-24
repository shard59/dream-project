import classNames from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text';
import Button from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import useAppDispatch from 'shared/helpers/hooks/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly
                ? (
                    <Button
                        variant="outline"
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            variant="outlineRed"
                            className={cls.editBtn}
                            onClick={onCancel}
                        >
                            {t('Cancel')}
                        </Button>

                        <Button
                            variant="outline"
                            onClick={onSave}
                        >
                            {t('Save')}
                        </Button>
                    </>
                ) }
        </div>
    );
};

export default ProfilePageHeader;
