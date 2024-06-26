'use client';

import { faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { TypingEffect } from '../../Common/TypingEffect';
import { DEV_CARD_VARIANTS } from '../../Feature/Development/DevCards/DevCard/animations';
import { DevCards } from '../../Feature/Development/DevCards/DevCards';
import { getDevCardVariants } from '../../Feature/Development/DevCards/animations';
import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';
import { TypingEffectProps, convertNodesToSpanElements } from '../../Utility/useTypingEffect';
import { WORK_EXPERIENCE, PROJECT_EXPERIENCE } from '../../data/experience';

const CONTENT: TypingEffectProps['content'] = [
    { text: '<', className: 'tw-text-cyan' },
    { text: 'p', className: 'tw-text-red' },
    { text: '>', className: 'tw-text-cyan' },
    {
        text: ' With a mathematical background, I have always excelled in problem solving. Web development for me is a place where I can apply those skills with creativity. ',
    },
    { text: '</', className: 'tw-text-cyan' },
    { text: 'p', className: 'tw-text-red' },
    { text: '>', className: 'tw-text-cyan' },
    { text: '\n', className: 'tw-block tw-w-full tw-h-2' },
    { text: '<', className: 'tw-text-cyan' },
    { text: 'p', className: 'tw-text-red' },
    { text: '>', className: 'tw-text-cyan' },
    {
        text: ' Check out some of my projects below! ',
    },
    { text: '</', className: 'tw-text-cyan' },
    { text: 'p', className: 'tw-text-red' },
    { text: '>', className: 'tw-text-cyan' },
];

const DEVELOPMENT_VISITED_KEY = 'development-visited';

const DevelopmentHeader = ({ children }: PropsWithChildren) => (
    <motion.h3
        variants={DEV_CARD_VARIANTS}
        transition={{ type: 'tween' }}
        className="tw-mb-6 tw-mt-12 tw-w-full tw-border-b tw-border-solid tw-border-b-grey tw-text-left tw-font-lora tw-text-2xl tw-font-bold tw-text-green"
    >
        {children}
    </motion.h3>
);

export default function DevelopmentClient() {
    const hasVisited =
        useRef(typeof window !== undefined ? sessionStorage.getItem(DEVELOPMENT_VISITED_KEY) === 'true' : false)
            .current ?? false;

    useEffect(() => {
        sessionStorage.setItem(DEVELOPMENT_VISITED_KEY, 'true');
    }, []);

    return (
        <motion.div
            variants={getDevCardVariants(hasVisited ? 0 : 3.2)}
            initial="hidden"
            animate="show"
            className="tw-w-full tw-bg-[url(/.netlify/images?url=/development/background.jpg)] tw-bg-cover tw-bg-fixed tw-bg-center tw-bg-no-repeat tw-px-2 tw-pb-[120px] tw-pt-12 md:tw-px-10"
        >
            <motion.h2
                className="tw-text-center tw-font-lora tw-text-4xl tw-font-bold tw-text-green"
                initial={DEV_CARD_VARIANTS.hidden}
                animate={DEV_CARD_VARIANTS.show}
                transition={{ type: 'tween' }}
            >
                Web Development
            </motion.h2>
            <div className="tw-mx-auto tw-max-w-[600px] tw-px-4 tw-pt-4">
                <p className="tw-min-h-[100px] tw-text-center tw-font-code">
                    {hasVisited ? (
                        <motion.span variants={DEV_CARD_VARIANTS} transition={{ type: 'tween' }}>
                            {convertNodesToSpanElements(CONTENT)}
                        </motion.span>
                    ) : (
                        <TypingEffect content={CONTENT} enabled minSpeed={8} maxSpeed={18} />
                    )}
                </p>
            </div>
            <div className="tw-relative tw-mx-auto tw-w-full tw-max-w-[1100px]">
                <DevelopmentHeader>Work Experience</DevelopmentHeader>
                <DevCards devCards={WORK_EXPERIENCE} />
                <div className="tw-mx-auto tw-flex tw-w-[90vw] tw-max-w-[500px] tw-flex-col tw-items-center tw-gap-1 tw-rounded tw-border-grey tw-bg-black/50 tw-px-6 tw-py-4 tw-font-active tw-text-4xl tw-text-white tw-shadow lg:tw-px-10 lg:tw-py-8">
                    Want more information?
                    <Link
                        href="/Sam Creasey Resume.pdf"
                        target="_blank"
                        className={merge(
                            'tw-border-line tw-group/resume tw-inline-flex tw-items-center tw-gap-x-2 tw-rounded-sm tw-px-2 tw-py-0 tw-font-lora tw-text-2xl tw-text-white tw-underline tw-transition hover:tw-scale-105 hover:tw-text-light-grey',
                            FOCUS_VISIBLE_STYLES,
                        )}
                    >
                        <FontAwesomeIcon icon={faFile} />
                        View Resume
                    </Link>
                </div>
                <DevelopmentHeader>Development Projects</DevelopmentHeader>
                <DevCards devCards={PROJECT_EXPERIENCE} />
            </div>
        </motion.div>
    );
}
