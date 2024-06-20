import { motion } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { TypingEffect } from '../../Common/TypingEffect';
import { DEV_CARD_VARIANTS } from '../../Feature/Development/DevCards/DevCard/animations';
import { DevCards } from '../../Feature/Development/DevCards/DevCards';
import { getDevCardVariants } from '../../Feature/Development/DevCards/animations';
import { WORK_EXPERIENCE, PROJECT_EXPERIENCE } from '../../Feature/Development/DevCards/experience';
import { useDocumentTitle } from '../../Utility/useDocumentTitle';
import { useScrollToTop } from '../../Utility/useScrollToTop';
import { TypingEffectProps, convertNodesToSpanElements } from '../../Utility/useTypingEffect';

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
    <h3 className="tw-mb-6 tw-mt-12 tw-w-full tw-border-b tw-border-solid tw-border-b-grey tw-text-left tw-font-lora tw-text-3xl tw-font-bold tw-text-green">
        {children}
    </h3>
);

export const Development = () => {
    useDocumentTitle("Sam Creasey's Development Portfolio");
    useScrollToTop();
    useEffect(() => {
        sessionStorage.setItem(DEVELOPMENT_VISITED_KEY, 'true');
    }, []);

    const hasVisited = useRef(sessionStorage.getItem(DEVELOPMENT_VISITED_KEY) === 'true').current;

    return (
        <motion.div
            variants={getDevCardVariants(hasVisited ? 0 : 3.2)}
            initial="hidden"
            animate="show"
            className="tw-w-full tw-bg-[url(/development/background.jpg)] tw-bg-cover tw-bg-fixed tw-bg-center tw-bg-no-repeat tw-px-2 tw-pb-[120px] tw-pt-12 md:tw-px-10"
        >
            <motion.h2
                className="tw-text-center tw-font-lora tw-text-4xl tw-font-bold tw-text-green"
                initial={DEV_CARD_VARIANTS.hidden}
                animate={DEV_CARD_VARIANTS.show}
                transition={{ type: 'tween' }}
            >
                Web Development
            </motion.h2>
            <div className="tw-mx-auto tw-max-w-[600px] tw-p-4">
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
            <div className="tw-mx-auto tw-w-full tw-max-w-[1100px]">
                <DevelopmentHeader>Work Experience</DevelopmentHeader>
                <DevCards devCards={WORK_EXPERIENCE} />
                <DevelopmentHeader>Development Projects</DevelopmentHeader>
                <DevCards devCards={PROJECT_EXPERIENCE} />
            </div>
        </motion.div>
    );
};
