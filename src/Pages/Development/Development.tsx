import { DevCards } from '../../Component/Development/DevCards/DevCards';

export const Development = () => (
    <div className="tw-pt-[30px] tw-pb-[150px] tw-bg-fixed tw-bg-no-repeat tw-bg-center tw-bg-cover tw-bg-[url(/development/background.jpg)]">
        <h2 className="tw-font-lora tw-text-light-green tw-font-bold tw-font-3xl">Web Development</h2>
        <div className="tw-p-4 tw-max-w-[600px] tw-mx-auto">
            <p className="tw-font-code">
                {'<'}
                <span style={{ color: 'red' }}>p</span>
                {'>'} As a self taught programmer, the only thing I've had to drive me to this point is myself. {'</'}
                <span style={{ color: 'red' }}>p</span>
                {'>'}
            </p>
            <p className="tw-font-code mb-3">
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
