import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { merge } from '../../../../Utility/merge';

import { DevCardLink } from './DevCardLink/DevCardLink';

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
        <section className="tw-border tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-grid tw-grid-cols-2 tw-max-w-[1100px]">
            <h3
                className={merge(
                    'tw-font-lora tw-min-h-[500px] tw-w-full tw-flex tw-items-center tw-justify-center tw-p-6 tw-text-6xl tw-font-3xl tw-col-span-2 md:tw-col-span-1 md:tw-order-1',
                    alt ? 'tw-order-2' : 'tw-order-1',
                )}
                style={{ color: altColor, background: color }}
            >
                {header}
            </h3>
            <div
                style={{ backgroundColor: altColor }}
                className={merge(
                    'tw-col-span-2 md:tw-col-span-1 tw-font-code tw-h-full tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center tw-p-6',
                    alt ? 'tw-order-1' : 'tw-order-2',
                )}
            >
                <p>
                    <strong>Description:</strong> {description}
                </p>
                <p>
                    <strong>Technologies/Frameworks: </strong>
                    {technologies.join(', ')}
                </p>
                <p>
                    <strong>API's: </strong>
                    {api.join(', ')}
                </p>
                <div className="tw-flex tw-w-full tw-justify-around">
                    <DevCardLink href={link}>
                        <FontAwesomeIcon className="Green" icon={faLink} size="lg" /> Live Build
                    </DevCardLink>
                    <DevCardLink href={github}>
                        <FontAwesomeIcon className="Green" icon={faGithubSquare} size="lg" /> Github Repo
                    </DevCardLink>
                </div>
            </div>
            <div className="tw-p-8 tw-bg-white tw-border-t tw-border-white tw-border-solid tw-order-3 tw-col-span-2">
                <h2
                    className="tw-font-lora"
                    onClick={() => {
                        showPreview(!preview);
                    }}
                    style={{ color: color }}
                >
                    Previews
                </h2>
                <div className="tw-w-full tw-grid tw-grid-cols-3">
                    {images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt=""
                            className="tw-col-span-3 md:tw-col-span-1 tw-max-h-[25rem] tw-mt-5 tw-object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
