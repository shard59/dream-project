import classNames from 'shared/helpers/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Countries, Country } from '../model/types/Countries';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void
    readonly?: boolean;
}

const CountryOptions: SelectOptions[] = Object.values(Countries)
    .map((val) => ({ value: val, content: val }));

const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly = false,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((country?: string) => {
        onChange?.(country as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose Country')}
            options={CountryOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};

export default memo(CountrySelect);
