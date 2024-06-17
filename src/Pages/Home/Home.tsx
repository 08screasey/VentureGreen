import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { TypingEffect } from '../../Common/TypingEffect';
import { Laptop } from '../../Feature/Development/Laptop/Laptop';
import { PhotoStack } from '../../Feature/Photography/PhotoStack/PhotoStack';
import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';
import { useIntersectionObserver } from '../../Utility/useIntersectionObserver';
import LeftBrain from '../../assets/brainLeft.svg';
import RightBrain from '../../assets/brainRight.svg';
import './Home.css';

const CONTENT = [
    { text: '<', className: 'Cyan' },
    { text: 'a', className: 'Red' },
    { text: '>', className: 'Cyan' },
    { text: 'Development', className: 'tw-text-black' },
    { text: '</', className: 'Cyan' },
    { text: 'a', className: 'Red' },
    { text: '>', className: 'Cyan' },
];

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
        <div className="Home tw-pt-3">
            <h1
                className="tw-mx-auto tw-font-lora tw-text-green"
                style={{
                    fontSize: '30px',
                    borderTop: '1px solid #CCC',
                    paddingTop: '30px',
                    textShadow: '1px 1px #eee',
                }}
            >
                Portfolio
            </h1>
            <p
                className="tw-mx-auto tw-font-lora"
                style={{
                    fontSize: '14px',
                    marginBottom: '30px',
                    marginTop: '20px',
                    color: '#888',
                    width: '80%',
                }}
            >
                For web development projects select the left side of his brain. To view photography gallery select the
                right side.
            </p>
            <div className="Flex">
                <Link to="/development" className={merge('tw-relative', FOCUS_VISIBLE_STYLES)} ref={devCardRef}>
                    <h2 className="tw-z-[4] tw-mx-auto tw-mb-0 tw-w-full tw-font-code tw-text-4xl">
                        <TypingEffect enabled={isDevInView} content={CONTENT} />
                    </h2>
                    <Laptop />
                </Link>
                <div className="HomeBreak">
                    <div className="Brain tw-mb-5 tw-flex tw-justify-center">
                        <Link className={isDevInView ? 'LeftBrain Active' : 'LeftBrain'} to="/development">
                            <img alt="" src="/home/brainLeftOverLay.png" className="BrainOverlay" />
                            <img alt="" src="/home/brainLeftText1.png" className="Text Text1" />
                            <img alt="" src="/home/brainLeftText2.png" className="Text Text2" />
                            <FontAwesomeIcon icon={faLevelUpAlt} className="Arrow PaleGreen" />
                            <LeftBrain />
                        </Link>

                        <Link className={isPhotoInView ? 'RightBrain Active' : 'RightBrain'} to="/photography">
                            <RightBrain />
                            <img alt="" src="/home/brainRightOverLay.png" className="BrainOverlay" />
                            <img alt="" src="/home/brainRightText1.png" className="Text Text1" />
                            <img alt="" src="/home/brainRightText2.png" className="Text Text2" />
                            <FontAwesomeIcon icon={faLevelUpAlt} className="Arrow Cyan" />
                        </Link>
                    </div>
                </div>

                <PhotoStack isInView={isPhotoInView} ref={photoCardRef} />
            </div>
        </div>
    );
};
