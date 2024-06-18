import { TypingEffect } from '../../Common/TypingEffect';
import { DevCards } from '../../Feature/Development/DevCards/DevCards';
import { TypingEffectProps } from '../../Utility/useTypingEffect';

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

export const Development = () => (
    <div className="tw-bg-[url(/development/background.jpg)] tw-bg-cover tw-bg-fixed tw-bg-center tw-bg-no-repeat tw-px-20 tw-pb-[150px] tw-pt-[30px]">
        <h2 className="tw-text-center tw-font-lora tw-text-3xl tw-font-bold tw-text-light-green">Web Development</h2>
        <div className="tw-mx-auto tw-max-w-[600px] tw-p-4">
            <p className="tw-mb-3 tw-text-center tw-font-code">
                <TypingEffect content={CONTENT} enabled minSpeed={10} maxSpeed={30} />
            </p>
        </div>
        <DevCards />
    </div>
);
