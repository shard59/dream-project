type Mods = Record<string, boolean | string>

export function classNames(mainClass: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        mainClass,
        ...additional,
        ...Object.entries(mods).reduce((cls, [className, val]) => {
            if (val) {
                cls.push(className)
            }
            return cls
        }, [])
    ].join(" ")
}