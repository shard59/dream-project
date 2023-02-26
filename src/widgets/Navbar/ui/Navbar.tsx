import React, { useCallback, useState } from 'react';
import classNames from 'shared/helpers/classNames/classNames';
import AppLink from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import RoutePath from 'shared/config/routePath/routePath';
import Modal from 'shared/ui/Modal/ui/Modal';
import Button from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const toggleAuthModalOpen = useCallback(() => {
        setAuthModalOpen(!isAuthModalOpen);
    }, [isAuthModalOpen]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                variant="clearInverted"
                className={cls.links}
                onClick={toggleAuthModalOpen}
            >
                {t('Login')}
            </Button>
            <Modal isOpen={isAuthModalOpen} onClose={toggleAuthModalOpen} />
        </div>
    );
};

export default Navbar;
