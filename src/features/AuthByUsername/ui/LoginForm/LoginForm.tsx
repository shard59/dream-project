import classNames from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input placeholder={t('Enter login:')} type="text" className={cls.input} />
            <Input placeholder={t('Enter password:')} type="text" className={cls.input} />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};

export default LoginForm;
