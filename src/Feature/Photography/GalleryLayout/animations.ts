export const GALLERY_CONTAINER_VARIANTS = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const GALLERY_ITEM_VARIANTS = {
    hidden: { y: 30, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    },
};
