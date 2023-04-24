import classNames from 'shared/helpers/classNames/classNames';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { SelectOptions } from 'shared/ui/Select/model/types/SelectOptions';
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[]
    value?: string
    onChange?: (value?: string) => void
    readonly?: boolean;
}

const Select = (props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly = false,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            className={cls.option}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};

export default memo(Select);
