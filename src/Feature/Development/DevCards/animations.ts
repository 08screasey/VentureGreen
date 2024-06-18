export const getDevCardVariants = (entranceDelay: number) => ({
    hidden: {},
    show: {
        transition: {
            delayChildren: entranceDelay,
            staggerChildren: 0.2,
        },
    },
});
