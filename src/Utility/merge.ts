export const merge = (...classNames: (string | false | null | undefined)[]) => {
    const array = [...classNames];

    return array.filter(Boolean).join(' ');
};
