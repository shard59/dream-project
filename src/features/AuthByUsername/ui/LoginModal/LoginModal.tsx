import Modal from 'shared/ui/Modal/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
