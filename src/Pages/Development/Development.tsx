import { DevCards } from '../../Feature/Development/DevCards/DevCards';

export const Development = () => (
    <div className="tw-bg-[url(/development/background.jpg)] tw-bg-cover tw-bg-fixed tw-bg-center tw-bg-no-repeat tw-pb-[150px] tw-pt-[30px]">
        <h2 className="tw-font-3xl tw-font-lora tw-font-bold tw-text-light-green">Web Development</h2>
        <div className="tw-mx-auto tw-max-w-[600px] tw-p-4">
            <p className="tw-font-code">
                {'<'}
                <span style={{ color: 'red' }}>p</span>
                {'>'} As a self taught programmer, the only thing I've had to drive me to this point is myself. {'</'}
                <span style={{ color: 'red' }}>p</span>
                {'>'}
            </p>
            <p className="tw-mb-3 tw-font-code">
                {'<'}
                <span style={{ color: 'red' }}>p</span>
                {'>'} With a mathematical background, I have always excelled in problem solving. It was a revelation to
                discover that web development was a skill that would satisfy both sides of my brain. {'</'}
                <span style={{ color: 'red' }}>p</span>
                {'>'}
            </p>
        </div>
        <DevCards />
    </div>
);
