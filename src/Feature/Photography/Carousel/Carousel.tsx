import { motion, AnimatePresence } from 'framer-motion';
import { type StaticImageData } from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactFocusLock from 'react-focus-lock';

import { NetlifyImg } from '../../../Common/NetlifyImage/NetlifyImage';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { useKeypress } from '../../../Utility/useKeypress';
import { wrap } from '../../../Utility/wrap';
import { type Image } from '../../../data/albums';

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 500 : -500,
            opacity: 0,
        };
    },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            x: direction < 0 ? 500 : -500,
            opacity: 0,
        };
    },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

type CarouselProps = { images: Image[]; startingIndex: number; onExit: () => void };

type CarouselImageProps = {
    src: StaticImageData;
    height: number;
    width: number;
    alt: string;
    direction: number;
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    onTouch: () => void;
};

const CarouselImage = ({ src, onSwipeLeft, onSwipeRight, alt, direction, onTouch }: CarouselImageProps) => {
    const isDragging = useRef(false);

    return (
        <motion.div
            custom={direction}
            className="tw-fixed tw-z-[100] tw-m-auto tw-flex tw-max-w-[1000px]"
            variants={variants}
            onTouchEnd={() => {
                if (!isDragging.current) {
                    onTouch();
                }
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: 'spring', stiffness: 300, damping: 30, bounce: 10, velocity: 600 },
                opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={() => {
                isDragging.current = true;
            }}
            onDragEnd={(_event, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                    onSwipeRight();
                } else if (swipe > swipeConfidenceThreshold) {
                    onSwipeLeft();
                }
                isDragging.current = false;
            }}
        >
            <NetlifyImg
                className="tw-pointer-events-none tw-max-h-[90vh] tw-w-full tw-max-w-[90vw] tw-object-contain"
                alt={alt}
                originalSrc={src}
                lazy={false}
            />
        </motion.div>
    );
};

export const Carousel = ({ images, startingIndex, onExit }: CarouselProps) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>();
    const [showButtons, setShowButtons] = useState(true);
    const [[page, direction], setPage] = useState([startingIndex, 1]);
    const [isAnimating, setIsAnimating] = useState(false);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
        setIsAnimating(true);
    };

    useKeypress({ key: 'Escape', callback: onExit });
    useKeypress({ key: 'ArrowRight', callback: () => paginate(1), enabled: !isAnimating });
    useKeypress({ key: 'ArrowLeft', callback: () => paginate(-1), enabled: !isAnimating });

    const showButtonsAndTriggerTimeout = useCallback(() => {
        setShowButtons(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShowButtons(false), 1000 * 3);
    }, []);

    const toggleButtons = useCallback(() => {
        if (showButtons) {
            clearTimeout(timeoutRef.current);
            setShowButtons(false);
        } else {
            showButtonsAndTriggerTimeout();
        }
    }, [showButtons, showButtonsAndTriggerTimeout]);

    const finishAnimation = useCallback(() => {
        setIsAnimating(false);
    }, []);

    useEffect(() => {
        showButtonsAndTriggerTimeout();
    }, [showButtonsAndTriggerTimeout]);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            clearTimeout(timeoutRef.current);
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <ReactFocusLock returnFocus>
            <div
                className="tw-fixed tw-left-0 tw-top-0 tw-z-[100] tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center"
                onMouseOver={showButtonsAndTriggerTimeout}
            >
                <button className="tw-sr-only" aria-label="Exit Gallery" />
                <div
                    className="tw-fixed tw-left-0 tw-top-0 tw-z-[6] tw-h-full tw-w-full tw-bg-black/70"
                    onClick={onExit}
                />
                <AnimatePresence initial={false} custom={direction} onExitComplete={finishAnimation}>
                    <CarouselImage
                        {...images[imageIndex]}
                        key={page}
                        onSwipeLeft={() => paginate(-1)}
                        onSwipeRight={() => paginate(1)}
                        onTouch={toggleButtons}
                        direction={direction}
                    />
                </AnimatePresence>
                <button
                    className={merge(
                        'tw-fixed tw-left-0 tw-top-0 tw-z-[108] tw-h-full tw-w-[5vw] tw-max-w-[32px] -tw-scale-100 tw-cursor-pointer tw-bg-black/40 tw-text-4xl tw-text-white tw-transition hover:tw-bg-black/60 focus-visible:tw-opacity-100 active:tw-bg-black/70',
                        FOCUS_VISIBLE_STYLES,
                        showButtons ? 'tw-opacity-100' : 'tw-opacity-0',
                    )}
                    onClick={() => {
                        paginate(-1);
                        showButtonsAndTriggerTimeout();
                    }}
                    aria-label="Move to previous image"
                >
                    {'‣'}
                </button>
                <button
                    className={merge(
                        'tw-fixed tw-right-0 tw-top-0 tw-z-[108] tw-h-full tw-w-[5vw] tw-max-w-[32px] tw-cursor-pointer tw-bg-black/40 tw-text-4xl tw-text-white tw-transition hover:tw-bg-black/60 focus-visible:tw-opacity-100 active:tw-bg-black/70',
                        FOCUS_VISIBLE_STYLES,
                        showButtons ? 'tw-opacity-100' : 'tw-opacity-0',
                    )}
                    onClick={() => {
                        paginate(1);
                        showButtonsAndTriggerTimeout();
                    }}
                    aria-label="Move to previous image"
                >
                    {'‣'}
                </button>
            </div>
        </ReactFocusLock>
    );
};
