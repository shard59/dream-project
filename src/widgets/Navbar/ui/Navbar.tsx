import React, { useCallback, useState } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import AppLink from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import RoutePath from 'shared/config/routePath/routePath';
import Modal from 'shared/ui/Modal/ui/Modal';
import Button from 'shared/ui/Button';
import LoginModal from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

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
