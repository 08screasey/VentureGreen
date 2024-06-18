export const SLIDE_MENU_VARIANTS = {
    hidden: { x: '-100%' },
    show: {
        x: '0%',
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
            type: 'tween',
        },
    },
};
