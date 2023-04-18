import classNames from 'shared/helpers/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div
            className={classNames(cls.inputWrapper, {}, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                {...otherProps}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
            />
        </div>
    );
});

export default Input;
