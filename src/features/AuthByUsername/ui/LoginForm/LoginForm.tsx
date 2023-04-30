import classNames from 'shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button';
import Text from 'shared/ui/Text';
import Input from 'shared/ui/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ReducersList, DynamicModuleLoader } from 'shared/helpers/components/DynamicModuleLoader';
import useAppDispatch from 'shared/helpers/hooks/useAppDispatch';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';
import getLoginUsername from '../../model/selectors/getLoginUsername/getLoginUsername';
import getLoginPassword from '../../model/selectors/getLoginPassword/getLoginPassword';
import getLoginError from '../../model/selectors/getLoginError/getLoginError';
import getLoginIsLoading from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = (props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
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
        </DynamicModuleLoader>
    );
};

export default memo(LoginForm);
