import { faInstagram, faFacebook, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type PropsWithChildren } from 'react';

import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';

const ContactLink = ({ children, href, label }: PropsWithChildren<{ href: string; label: string }>) => (
    <a
        rel="noopener noreferrer"
        href={href}
        target="_blank"
        className={merge(
            'tw-inline-flex tw-h-12 tw-w-12 tw-animate-pulse tw-items-center tw-justify-center tw-rounded-full tw-bg-green tw-p-2 tw-text-white',
            FOCUS_VISIBLE_STYLES,
        )}
        aria-label={label}
    >
        {children}
    </a>
);

export const About = () => (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-10">
        <div className="tw-flex tw-w-[95%] tw-max-w-[1200px] tw-flex-col tw-items-center tw-gap-12 tw-px-2 lg:tw-flex-row">
            <img
                className="tw-aspect-square tw-w-[75vw] tw-max-w-[350px] tw-rounded-full tw-object-cover"
                src="/about/about-mountain.jpg"
            />
            <div className="tw-text-center lg:tw-text-left">
                <h2 className="tw-mb-4 tw-font-lora tw-text-4xl tw-font-bold tw-text-light-green">Hi! I'm Sam</h2>

                <p className="tw-mb-3 tw-font-lora">
                    I've spent the last 9 years travelling full-time, working remotely as a software engineer and
                    photographer.
                </p>
                <p className="tw-mb-3 tw-font-lora">
                    My portfolio is a showcase of everything I have taught myself. I started my journey into web
                    development after discovering that it allowed me to combine creativity with my natural
                    problem-solving skillset.
                </p>
                <p className="tw-mb-3 tw-font-lora">
                    With 5 years of professional experience I can bring your website ideas to life, and with 7 years of
                    hospitality experience I can guarantee great communication all the way.
                </p>
                <p className="tw-mb-3 tw-font-lora">Reach out using any of the links below!</p>
                <div className="tw-mt-6 tw-flex tw-w-full tw-justify-around lg:tw-max-w-[500px] lg:tw-justify-between">
                    <ContactLink href="mailto:screasey97@gmail.com" label="Email">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </ContactLink>
                    <ContactLink href="https://www.instagram.com/venturegreenphotography/" label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </ContactLink>
                    <ContactLink href="https://www.facebook.com/sam.creasey1" label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/sam-creasey-056b371b7/" label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </ContactLink>
                    <ContactLink href="https://github.com/08screasey" label="Github">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </ContactLink>
                </div>
            </div>
        </div>
    </div>
);
