export const GALLERY_CONTAINER_VARIANTS = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const GALLERY_HEADER_VARIANTS = {
    hidden: { y: 10, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    },
};

export const GALLERY_ITEM_VARIANTS = {
    hidden: { y: 0, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    },
};
