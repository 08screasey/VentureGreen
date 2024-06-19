import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { NetlifyImg } from '../../Common/NetflifyImage/NetlifyImage';
import { TypingEffect } from '../../Common/TypingEffect';
import { Laptop } from '../../Feature/Development/Laptop/Laptop';
import { PhotoStack } from '../../Feature/Photography/PhotoStack/PhotoStack';
import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';
import { useDocumentTitle } from '../../Utility/useDocumentTitle';
import { useIntersectionObserver } from '../../Utility/useIntersectionObserver';
import LeftBrain from '../../assets/brainLeft.svg';
import RightBrain from '../../assets/brainRight.svg';

const CONTENT = [
    { text: '<', className: 'tw-text-cyan' },
    { text: 'a', className: 'tw-text-red' },
    { text: '>', className: 'tw-text-cyan' },
    { text: 'Development', className: 'tw-text-black' },
    { text: '</', className: 'tw-text-cyan' },
    { text: 'a', className: 'tw-text-red' },
    { text: '>', className: 'tw-text-cyan' },
];

const EqualSizingCol = ({ children }: PropsWithChildren) => (
    <div className="tw-relative tw-flex tw-min-w-0 tw-max-w-[450px] tw-flex-col tw-items-center lg:tw-flex-initial lg:tw-basis-[450px]">
        {children}
    </div>
);

export const Home = () => {
    useDocumentTitle("Sam Creasey's Portfolio");

    const [isDevInView, setIsDevInView] = useState(false);
    const [isPhotoInView, setIsPhotoInView] = useState(false);

    const photoCardRef = useRef<HTMLAnchorElement>(null);
    useIntersectionObserver({
        onEnter: useCallback(() => setIsPhotoInView(true), []),
        onLeave: useCallback(() => setIsPhotoInView(false), []),
        topOffset: 300,
        bottomOffset: 100,
        ref: photoCardRef,
    });

    const devCardRef = useRef<HTMLAnchorElement>(null);
    useIntersectionObserver({
        onEnter: useCallback(() => setIsDevInView(true), []),
        onLeave: useCallback(() => setIsDevInView(false), []),
        topOffset: 300,
        bottomOffset: 100,
        ref: devCardRef,
    });

    return (
        <div className="tw-flex tw-min-w-0 tw-flex-initial tw-flex-col-reverse tw-items-center tw-justify-around tw-gap-x-8 tw-gap-y-16 tw-self-center tw-px-10 tw-py-20 lg:tw-flex-row lg:tw-px-8 lg:tw-pb-10 lg:tw-pt-8">
            <EqualSizingCol>
                <Link
                    to="/development"
                    className={merge('tw-relative tw-flex tw-flex-col tw-items-center tw-gap-2', FOCUS_VISIBLE_STYLES)}
                    ref={devCardRef}
                >
                    <Laptop />
                    <h2 className="tw-z-[4] tw-mx-auto tw-w-full tw-text-center tw-font-code tw-text-3xl tw-drop-shadow-xl md:tw-text-4xl lg:tw-text-3xl xl:tw-text-4xl">
                        <TypingEffect enabled={isDevInView} content={CONTENT} />
                    </h2>
                </Link>
            </EqualSizingCol>

            <div className="tw-flex tw-flex-none tw-justify-center tw-gap-x-2 tw-px-10">
                <Link
                    to="/development"
                    className={merge(
                        'tw-group/left-brain tw-relative tw-w-[90px] tw-origin-right tw-transition hover:tw-scale-105 focus-visible:tw-scale-105',
                        FOCUS_VISIBLE_STYLES,
                    )}
                    aria-label="Go to development"
                >
                    <NetlifyImg
                        alt=""
                        width={64}
                        originalSrc="/home/brainLeftText1.png"
                        wrapperClassName={merge(
                            isDevInView ? 'tw-translate-x-0 tw-delay-150' : 'tw-translate-x-14',
                            'tw-left-[-30px] tw-top-[10px] tw-w-[52px] tw-transition-all',
                        )}
                        wrapperPosition="absolute"
                        usePlaceholder={false}
                        originalWidth={316}
                        originalHeight={506}
                    />
                    <NetlifyImg
                        alt=""
                        width={64}
                        originalSrc="/home/brainLeftText2.png"
                        wrapperClassName={merge(
                            isDevInView ? 'tw-translate-x-0 tw-delay-75' : 'tw-translate-x-14',
                            'tw-left-[-30px] tw-top-[100px] tw-w-[52px] tw-transition-all',
                        )}
                        wrapperPosition="absolute"
                        usePlaceholder={false}
                        originalWidth={316}
                        originalHeight={506}
                    />
                    <FontAwesomeIcon
                        icon={faLevelUpAlt}
                        size="2x"
                        className={merge(
                            isDevInView
                                ? 'tw-translate-y-0 tw-scale-100 tw-delay-200'
                                : 'tw-translate-x-20 tw-scale-0 lg:tw-translate-x-0 lg:tw-translate-y-20',
                            'tw-absolute tw-left-[-60px] tw-top-[85px] tw-rotate-180 tw-text-extra-light-green tw-transition-all lg:tw-left-[40px] lg:tw-top-[-40px] lg:-tw-rotate-90',
                        )}
                    />
                    <LeftBrain
                        className={merge(
                            'tw-relative tw-z-[2] tw-w-full tw-fill-grey tw-transition',
                            isDevInView && 'tw-scale-95',
                        )}
                    />
                    <NetlifyImg
                        alt=""
                        width={256}
                        originalSrc="/home/brainLeftOverLay.png"
                        wrapperClassName={merge(
                            isDevInView ? 'tw-scale-1 tw-opacity-100' : 'tw-scale-0 tw-opacity-0',
                            'tw-right-0 tw-top-0 tw-z-[3] tw-h-full tw-w-[150px] tw-origin-right tw-transition-all',
                        )}
                        wrapperPosition="absolute"
                        originalHeight={916}
                        originalWidth={800}
                    />
                </Link>

                <Link
                    to="/photography"
                    className={merge(
                        'tw-group/right-brain tw-relative tw-w-[90px] tw-origin-left tw-transition hover:tw-scale-105 focus-visible:tw-scale-105',
                        FOCUS_VISIBLE_STYLES,
                    )}
                    aria-label="Go to photography"
                >
                    <NetlifyImg
                        alt=""
                        originalSrc="/home/brainRightText1.png"
                        width={64}
                        wrapperClassName={merge(
                            isPhotoInView ? 'tw-translate-x-0 tw-delay-150' : '-tw-translate-x-14',
                            'tw-right-[-28px] tw-top-[5px] tw-w-[52px] tw-transition-all',
                        )}
                        wrapperPosition="absolute"
                        usePlaceholder={false}
                        originalHeight={302}
                        originalWidth={439}
                    />
                    <NetlifyImg
                        alt=""
                        width={64}
                        originalSrc="/home/brainRightText2.png"
                        wrapperClassName={merge(
                            isPhotoInView ? 'tw-translate-x-0 tw-delay-75' : '-tw-translate-x-14',
                            'tw-right-[-28px] tw-top-[90px] tw-w-[52px] tw-transition-all',
                        )}
                        wrapperPosition="absolute"
                        usePlaceholder={false}
                        originalHeight={302}
                        originalWidth={439}
                    />
                    <FontAwesomeIcon
                        icon={faLevelUpAlt}
                        size="2x"
                        className={merge(
                            isPhotoInView
                                ? 'tw-translate-y-0 tw-scale-100 tw-delay-200'
                                : '-tw-translate-x-20 tw-scale-0 lg:-tw-translate-y-20 lg:tw-translate-x-0',
                            'tw-absolute tw-bottom-[80px] tw-right-[-60px] tw-text-extra-light-cyan tw-transition-all lg:tw-bottom-[-40px] lg:tw-right-[40px] lg:tw-rotate-90',
                        )}
                    />
                    <RightBrain
                        className={merge(
                            'tw-relative tw-z-[2] tw-w-full tw-fill-grey tw-transition',
                            isPhotoInView && 'tw-scale-95',
                        )}
                    />
                    <NetlifyImg
                        alt=""
                        width={256}
                        originalSrc="/home/brainRightOverLay.png"
                        wrapperClassName={merge(
                            isPhotoInView ? 'tw-scale-1 tw-opacity-100' : 'tw-scale-0 tw-opacity-0',
                            'tw-top-0 tw-z-[3] tw-h-full tw-origin-left tw-transition-all tw-w-[150px]',
                        )}
                        wrapperPosition="absolute"
                        originalWidth={800}
                        originalHeight={917}
                    />
                </Link>
            </div>

            <EqualSizingCol>
                <PhotoStack isInView={isPhotoInView} ref={photoCardRef} />
            </EqualSizingCol>
        </div>
    );
};
