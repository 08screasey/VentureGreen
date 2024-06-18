import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { TypingEffect } from '../../Common/TypingEffect';
import { Laptop } from '../../Feature/Development/Laptop/Laptop';
import { PhotoStack } from '../../Feature/Photography/PhotoStack/PhotoStack';
import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';
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

const Col = ({ children }: PropsWithChildren) => (
    <div className="tw-relative tw-flex tw-min-w-0 tw-max-w-[450px] tw-flex-col tw-items-center lg:tw-flex-initial lg:tw-basis-[450px]">
        {children}
    </div>
);

export const Home = () => {
    const [isDevInView, setIsDevInView] = useState(false);
    const [isPhotoInView, setIsPhotoInView] = useState(false);

    const photoCardRef = useRef<HTMLAnchorElement>(null);
    useIntersectionObserver({
        onEnter: () => setIsPhotoInView(true),
        onLeave: () => setIsPhotoInView(false),
        topOffset: 650,
        bottomOffset: 100,
        ref: photoCardRef,
    });

    const devCardRef = useRef<HTMLAnchorElement>(null);
    useIntersectionObserver({
        onEnter: () => setIsDevInView(true),
        onLeave: () => setIsDevInView(false),
        topOffset: 200,
        ref: devCardRef,
    });

    return (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-around tw-gap-x-8 tw-gap-y-20 tw-self-center tw-px-4 tw-pb-20 tw-pt-10 lg:tw-flex-row lg:tw-px-8 lg:tw-pb-10">
            <Col>
                <Link
                    to="/development"
                    className={merge('tw-relative tw-flex tw-flex-col tw-items-center tw-gap-2', FOCUS_VISIBLE_STYLES)}
                    ref={devCardRef}
                >
                    <Laptop />
                    <h2 className="tw-z-[4] tw-mx-auto tw-w-full tw-text-center tw-font-code tw-text-4xl lg:tw-text-3xl xl:tw-text-4xl">
                        <TypingEffect enabled={isDevInView} content={CONTENT} />
                    </h2>
                </Link>
            </Col>
            <div className="tw-flex tw-flex-none tw-justify-center tw-gap-x-2 tw-px-10">
                <Link to="/development" className={merge('tw-relative tw-w-[90px]', FOCUS_VISIBLE_STYLES)}>
                    <img
                        alt=""
                        src="/home/brainLeftText1.png"
                        className={merge(
                            isDevInView ? 'tw-translate-x-0' : 'tw-translate-x-14',
                            'tw-absolute tw-left-[-30px] tw-top-[10px] tw-w-[52px] tw-max-w-[unset] tw-transition-all',
                        )}
                    />
                    <img
                        alt=""
                        src="/home/brainLeftText2.png"
                        className={merge(
                            isDevInView ? 'tw-translate-x-0' : 'tw-translate-x-14',
                            'tw-absolute tw-left-[-30px] tw-top-[100px] tw-w-[52px] tw-max-w-[unset] tw-transition-all',
                        )}
                    />
                    <FontAwesomeIcon
                        icon={faLevelUpAlt}
                        size="3x"
                        className={merge(
                            isDevInView ? 'tw-translate-y-0 tw-scale-100' : 'tw-translate-y-20 tw-scale-0',
                            'tw-absolute tw-left-[30px] tw-top-[-50px] -tw-rotate-90 tw-text-green tw-transition-all',
                        )}
                    />
                    <LeftBrain className="tw-fill-grey tw-relative tw-z-[2] tw-w-full" />
                    <img
                        alt=""
                        src="/home/brainLeftOverLay.png"
                        className={merge(
                            isDevInView ? 'tw-scale-1 tw-opacity-100' : 'tw-scale-0 tw-opacity-0',
                            'tw-absolute tw-right-0 tw-top-0 tw-z-[3] tw-h-full tw-w-auto tw-max-w-[unset] tw-origin-right tw-transition-all',
                        )}
                    />
                </Link>

                <Link to="/photography" className={merge('tw-relative tw-w-[90px]', FOCUS_VISIBLE_STYLES)}>
                    <img
                        alt=""
                        src="/home/brainRightText1.png"
                        className={merge(
                            isPhotoInView ? 'tw-translate-x-0' : '-tw-translate-x-14',
                            'tw-absolute tw-right-[-28px] tw-top-[5px] tw-w-[52px] tw-max-w-[unset] tw-transition-all',
                        )}
                    />
                    <img
                        alt=""
                        src="/home/brainRightText2.png"
                        className={merge(
                            isPhotoInView ? 'tw-translate-x-0' : '-tw-translate-x-14',
                            'tw-absolute tw-right-[-28px] tw-top-[90px] tw-w-[52px] tw-max-w-[unset] tw-transition-all',
                        )}
                    />
                    <FontAwesomeIcon
                        icon={faLevelUpAlt}
                        size="3x"
                        className={merge(
                            isPhotoInView ? 'tw-translate-y-0 tw-scale-100' : '-tw-translate-y-20 tw-scale-0',
                            'tw-absolute tw-bottom-[-50px] tw-right-[30px] tw-rotate-90 tw-text-cyan tw-transition-all',
                        )}
                    />
                    <RightBrain className="tw-fill-grey tw-relative tw-z-[2] tw-w-full" />
                    <img
                        alt=""
                        src="/home/brainRightOverLay.png"
                        className={merge(
                            isPhotoInView ? 'tw-scale-1 tw-opacity-100' : 'tw-scale-0 tw-opacity-0',
                            'tw-absolute tw-top-0 tw-z-[3] tw-h-full tw-w-auto tw-max-w-[unset] tw-origin-left tw-transition-all',
                        )}
                    />
                </Link>
            </div>
            <Col>
                <PhotoStack isInView={isPhotoInView} ref={photoCardRef} />
            </Col>
        </div>
    );
};
