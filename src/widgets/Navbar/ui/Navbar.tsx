import React, { useCallback, useState } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const autData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const openModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    const logout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (autData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    variant="clearInverted"
                    className={cls.links}
                    onClick={logout}
                >
                    {t('Logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                variant="clearInverted"
                className={cls.links}
                onClick={openModal}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Navbar;
