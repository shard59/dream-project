import classNames from 'shared/helpers/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Currencies, Currency } from '../model/types/Currencies';

interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void
    readonly?: boolean;
}

const currencyOptions: SelectOptions[] = Object.values(Currencies)
    .map((val) => ({ value: val, content: val }));

const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly = false,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((currency?: string) => {
        onChange?.(currency as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose currency')}
            options={currencyOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};

export default memo(CurrencySelect);
