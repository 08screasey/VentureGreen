import { DevCard, DevCardProps } from './DevCard/DevCard';

type DevCardsProps = {
    devCards: DevCardProps[];
};

export const DevCards = ({ devCards }: DevCardsProps) => (
    <div className="tw-mx-auto tw-mb-12 tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-12">
        {devCards.map((card) => (
            <DevCard {...card} key={card.header} />
        ))}
    </div>
);
