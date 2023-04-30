import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import classNames from 'shared/helpers/classNames/classNames';
import Button from 'shared/ui/Button/ui/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} variant="clear">
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};

export default memo(Code);
