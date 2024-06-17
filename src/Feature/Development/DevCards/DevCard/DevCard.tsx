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
        <section className="tw-border-light-grey tw-grid tw-max-w-[1100px] tw-grid-cols-2 tw-overflow-hidden tw-rounded-lg tw-border tw-shadow-lg">
            <h3
                className={merge(
                    'tw-font-active tw-col-span-2 tw-flex tw-min-h-[500px] tw-w-full tw-items-center tw-justify-center tw-p-20 tw-text-center tw-text-8xl md:tw-order-1 md:tw-col-span-1',
                    alt ? 'tw-order-2' : 'tw-order-1',
                )}
                style={{ color: altColor, background: color }}
            >
                {header}
            </h3>
            <div
                style={{ backgroundColor: altColor }}
                className={merge(
                    'tw-col-span-2 tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-4 tw-p-6 tw-font-code md:tw-col-span-1',
                    alt ? 'tw-order-1' : 'tw-order-2',
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
                    <DevCardLink href={link}>
                        <FontAwesomeIcon className="tw-text-green" icon={faLink} size="lg" /> Live Build
                    </DevCardLink>
                    <DevCardLink href={github}>
                        <FontAwesomeIcon className="tw-text-green" icon={faGithubSquare} size="lg" /> Github Repo
                    </DevCardLink>
                </div>
            </div>
            <div className="tw-order-3 tw-col-span-2 tw-border-t tw-border-solid tw-border-t-white tw-bg-white tw-p-8">
                <h4
                    className="tw-font-active tw-mb-3 tw-text-center tw-text-6xl tw-font-bold"
                    onClick={() => {
                        showPreview(!preview);
                    }}
                    style={{ color: color }}
                >
                    Previews
                </h4>
                <div className="tw-grid tw-w-full tw-grid-cols-3">
                    {images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt=""
                            className="tw-col-span-3 tw-mt-5 tw-max-h-[25rem] tw-object-contain md:tw-col-span-1"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
