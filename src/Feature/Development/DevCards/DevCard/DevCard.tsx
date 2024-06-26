import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { type ReactElement } from 'react';

import { PlaceholderImage } from '../../../../Common/PlaceholderImage/PlaceholderImage';
import { Image } from '../../../../data/albums';
import { merge } from '../../../../Utility/merge';

import { DevCardLink } from './DevCardLink/DevCardLink';
import { DEV_CARD_VARIANTS } from './animations';

export type DevCardProps = {
    alt?: boolean;
    color: string;
    altColor: string;
    header: string;
    description: string;
    technologies?: string[];
    resources?: string[];
    role?: string;
    achievement?: string;
    logo?: ReactElement;
    link: string;
    github?: string;
    images?: [Image, Image, Image];
};

export const DevCard = ({
    alt,
    color,
    altColor,
    header,
    description,
    technologies,
    resources,
    link,
    role,
    github,
    images,
    achievement,
    logo,
}: DevCardProps) => (
    <motion.section
        variants={DEV_CARD_VARIANTS}
        transition={{ type: 'tween' }}
        className="tw-grid tw-grid-cols-2 tw-overflow-hidden tw-rounded-lg tw-border tw-border-light-grey tw-shadow-lg"
    >
        <h4
            className={merge(
                'tw-order-1 tw-col-span-2 tw-flex tw-min-h-[225px] tw-w-full tw-items-center tw-justify-center tw-p-8 tw-text-center tw-font-active tw-text-6xl lg:tw-order-1 lg:tw-col-span-1 lg:tw-min-h-[450px] lg:tw-p-10 lg:tw-text-7xl',
                alt ? 'lg:tw-order-2' : 'lg:tw-order-1',
            )}
            style={{ color: altColor, background: color }}
            {...(logo ? { 'aria-label': header } : {})}
        >
            {logo ?? header}
        </h4>
        <div
            style={{ backgroundColor: altColor }}
            className={merge(
                'tw-order-2 tw-col-span-2 tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-p-5 tw-font-code tw-text-sm lg:tw-col-span-1 lg:tw-p-10 lg:tw-text-base',
                alt ? 'lg:tw-order-1' : 'lg:tw-order-2',
            )}
        >
            <table>
                {[
                    { title: 'Role', value: role },
                    { title: 'Description', value: description },
                    { title: 'Achievements', value: achievement },
                    { title: 'Tech Stack', value: technologies?.join(', ') },
                    { title: 'Resources', value: resources?.join(', ') },
                ]
                    .filter(({ value }) => Boolean(value))
                    .map(({ title, value }) => (
                        <tr
                            key={title}
                            className="tw-group/row tw-border-b tw-border-b-light-grey tw-align-top last:tw-border-none even:tw-brightness-50"
                        >
                            <td className="tw-py-2 tw-pr-2 tw-font-bold group-first/row:tw-pt-0 group-last/row:tw-pb-0">
                                {title}:
                            </td>
                            <td className="tw-py-2 group-first/row:tw-pt-0 group-last/row:tw-pb-0">{value}</td>
                        </tr>
                    ))}
            </table>
            <div className="tw-flex tw-w-full tw-justify-around">
                <DevCardLink href={link} icon={faLink}>
                    Visit Website
                </DevCardLink>
                {github && (
                    <DevCardLink href={github} icon={faGithubSquare}>
                        Github Repo
                    </DevCardLink>
                )}
            </div>
        </div>
        {images && (
            <div className="tw-order-3 tw-col-span-2 tw-border-t tw-border-solid tw-border-t-light-grey tw-bg-white tw-p-8">
                <h4 className="tw-mb-3 tw-text-center tw-font-active tw-text-6xl tw-font-bold" style={{ color: color }}>
                    Previews
                </h4>
                <div className="tw-grid tw-w-full tw-grid-cols-3 tw-items-center">
                    {images.map(({ src, height, width, alt }) => (
                        <PlaceholderImage
                            key={src}
                            width={512}
                            originalSrc={src}
                            originalHeight={height}
                            originalWidth={width}
                            alt={alt ?? ''}
                            objectFit="contain"
                            wrapperClassName="tw-col-span-3 tw-mx-auto tw-mt-5 tw-max-h-[25rem] tw-object-contain lg:tw-col-span-1"
                            lazy
                        />
                    ))}
                </div>
            </div>
        )}
    </motion.section>
);
