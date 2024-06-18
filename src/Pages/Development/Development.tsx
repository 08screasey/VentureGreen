import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { TypingEffect } from '../../Common/TypingEffect';
import { DEV_CARD_VARIANTS } from '../../Feature/Development/DevCards/DevCard/animations';
import { DevCards } from '../../Feature/Development/DevCards/DevCards';
import { getDevCardVariants } from '../../Feature/Development/DevCards/animations';
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

export const Development = () => {
    useEffect(() => {
        sessionStorage.setItem(DEVELOPMENT_VISITED_KEY, 'true');
    }, []);

    const hasVisited = useRef(sessionStorage.getItem(DEVELOPMENT_VISITED_KEY) === 'true').current;

    return (
        <motion.div
            variants={getDevCardVariants(hasVisited ? 0 : 5)}
            initial="hidden"
            animate="show"
            className="tw-w-full tw-bg-[url(/development/background.jpg)] tw-bg-cover tw-bg-fixed tw-bg-center tw-bg-no-repeat tw-px-2 tw-pb-[150px] tw-pt-[50px] md:tw-px-10"
        >
            <motion.h2
                className="tw-text-center tw-font-lora tw-text-4xl tw-font-bold tw-text-green"
                variants={DEV_CARD_VARIANTS}
                transition={{ type: 'tween' }}
            >
                Web Development
            </motion.h2>
            <div className="tw-mx-auto tw-max-w-[600px] tw-p-4">
                <p className="tw-mb-3 tw-min-h-[100px] tw-text-center tw-font-code">
                    {hasVisited ? (
                        <motion.span variants={DEV_CARD_VARIANTS} transition={{ type: 'tween' }}>
                            {convertNodesToSpanElements(CONTENT)}
                        </motion.span>
                    ) : (
                        <TypingEffect content={CONTENT} enabled minSpeed={8} maxSpeed={30} />
                    )}
                </p>
            </div>
            <DevCards />
        </motion.div>
    );
};
