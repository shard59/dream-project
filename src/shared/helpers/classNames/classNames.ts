export type Mods = Record<string, boolean | string | undefined>

export default function classNames(
    mainClass: string,
    mods: Mods = {},
    additional: (string | undefined)[] = [],
): string {
    return [
        mainClass,
        ...additional.filter(Boolean),
        ...Object.entries(mods).reduce<string[]>((cls, [className, val]) => {
            if (val) {
                cls.push(className);
            }
            return cls;
        }, []),
    ].join(' ');
}
