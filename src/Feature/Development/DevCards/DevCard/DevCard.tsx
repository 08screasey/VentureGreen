import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { merge } from '../../../../Utility/merge';

import { DevCardLink } from './DevCardLink/DevCardLink';
import { DEV_CARD_VARIANTS } from './animations';

type DevCardProps = {
    alt?: boolean;
    color: string;
    altColor: string;
    header: string;
    description: string;
    technologies: string[];
    api: string[];
    link: string;
    github: string;
    images: [string, string, string];
};

export const DevCard = ({
    alt,
    color,
    altColor,
    header,
    description,
    technologies,
    api,
    link,
    github,
    images,
}: DevCardProps) => {
    const [preview, showPreview] = useState(false);

    return (
        <motion.section
            variants={DEV_CARD_VARIANTS}
            transition={{ type: 'tween' }}
            className="tw-grid tw-max-w-[1100px] tw-grid-cols-2 tw-overflow-hidden tw-rounded-lg tw-border tw-border-light-grey tw-shadow-lg"
        >
            <h3
                className={merge(
                    'tw-order-1 tw-col-span-2 tw-flex tw-min-h-[225px] tw-w-full tw-items-center tw-justify-center tw-p-10 tw-text-center tw-font-active tw-text-7xl lg:tw-order-1 lg:tw-col-span-1 lg:tw-min-h-[450px]',
                    alt ? 'lg:tw-order-2' : 'lg:tw-order-1',
                )}
                style={{ color: altColor, background: color }}
            >
                {header}
            </h3>
            <div
                style={{ backgroundColor: altColor }}
                className={merge(
                    'tw-order-2 tw-col-span-2 tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-p-8 tw-font-code lg:tw-col-span-1',
                    alt ? 'lg:tw-order-1' : 'lg:tw-order-2',
                )}
            >
                <p>
                    <strong className="tw-font-bold">Description:</strong> {description}
                </p>
                <p>
                    <strong className="tw-font-bold">Technologies/Frameworks: </strong>
                    {technologies.join(', ')}
                </p>
                <p>
                    <strong className="tw-font-bold">API's: </strong>
                    {api.join(', ')}
                </p>
                <div className="tw-flex tw-w-full tw-justify-around">
                    <DevCardLink href={link} icon={faLink}>
                        Live Build
                    </DevCardLink>
                    <DevCardLink href={github} icon={faGithubSquare}>
                        Github Repo
                    </DevCardLink>
                </div>
            </div>
            <div className="tw-order-3 tw-col-span-2 tw-border-t tw-border-solid tw-border-t-light-grey tw-bg-white tw-p-8">
                <h4
                    className="tw-mb-3 tw-text-center tw-font-active tw-text-6xl tw-font-bold"
                    onClick={() => {
                        showPreview(!preview);
                    }}
                    style={{ color: color }}
                >
                    Previews
                </h4>
                <div className="tw-grid tw-w-full tw-grid-cols-3 tw-items-center">
                    {images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt=""
                            className="tw-col-span-3 tw-mx-auto tw-mt-5 tw-max-h-[25rem] tw-object-contain lg:tw-col-span-1"
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
