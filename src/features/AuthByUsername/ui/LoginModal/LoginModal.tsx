import Modal from 'shared/ui/Modal/ui/Modal';
import { Suspense } from 'react';
import Loader from 'shared/ui/Loader';
import LoginForm from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={className}
        >
            <Suspense fallback={<Loader />}>
                <LoginForm onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;
