import classNames from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button';
import Text from 'shared/ui/Text';
import Input from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/LoginSlice';
import getLoginState from '../../model/selectors/getLoginState/getLoginState';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Auth form')} />
            {error && <Text text={t('Incorrect password')} variant="error" />}
            <Input
                placeholder={t('Enter login')}
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Enter password')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                variant="outline"
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
});

export default LoginForm;
