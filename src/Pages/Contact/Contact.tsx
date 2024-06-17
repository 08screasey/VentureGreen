import { faInstagram, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type PropsWithChildren } from 'react';

const ContactLink = ({ children, href, label }: PropsWithChildren<{ href: string; label: string }>) => (
    <a
        rel="noopener noreferrer"
        href={href}
        target="_blank"
        className="tw-inline-flex tw-h-12 tw-w-12 tw-animate-pulse tw-items-center tw-justify-center tw-rounded-full tw-bg-green tw-p-2 tw-text-white"
        aria-label={label}
    >
        {children}
    </a>
);

export const Contact = () => (
    <div className="tw-mx-auto tw-mt-3 tw-w-[95%] tw-max-w-[800px] tw-px-2 tw-pb-[90px]">
        <h2 className="tw-mb-4 tw-text-center tw-font-lora tw-text-4xl tw-font-bold tw-text-light-green">Contact Me</h2>
        <img
            className="tw-mx-auto tw-mb-4 tw-aspect-square tw-w-[75vw] tw-max-w-[350px] tw-rounded-full tw-bg-cover"
            src="/about/about-mountain.jpg"
        />
        <p className="tw-font-old-standard">
            Whether you're looking to hire a new web developer, needing to update your product images or even just
            reaching out because you think there's something I could do better, I'd love to hear from you!
        </p>
        <p className="tw-font-old-standard">
            If you're interested in what I do I'm always excited to collaborate or share whatever knowledge I've picked
            up on my travels.
        </p>
        <p className="tw-font-old-standard">
            Get in contact by sending me an email. Or, alternatively feel free to get in touch through any of my social
            media links.
        </p>
        <p className="tw-font-old-standard">~ Sam</p>
        <div className="tw-relative">
            <div className="tw-mt-4 tw-flex tw-w-full tw-justify-around">
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
            </div>
        </div>
    </div>
);
