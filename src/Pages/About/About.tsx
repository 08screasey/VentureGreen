import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const About = () => (
    <div className="tw-pb-15 tw-flex tw-w-full tw-flex-wrap tw-items-center tw-justify-around">
        <img
            src="/about/about.jpg"
            alt="Portrait image of me."
            className="tw-aspect-square tw-w-[60%] tw-max-w-[400px] tw-rounded-full"
        />
        <div className="tw-w-full tw-max-w-[700px] tw-p-4 tw-font-lora">
            <h2 className="tw-font-lora tw-text-green">Hi, I'm Sam!</h2>
            <p>
                Whilst on the road I began using photography as a medium to document my adventures, volunteering
                whenever possible alongside environmental organisations and ethical companies.
            </p>
            <p>
                Eventually I felt as though I had even more to offer, and discovered that web development was scratching
                an itch for problem solving I'd had since graduating, allowing me to combine creativity with my natural
                analytical skillset.
            </p>
            <p>
                My portfolio is a showcase of everything I have taught myself. I am always tenacious in my quest to
                learn more, even if that meant bringing my laptop to the ski hill.
            </p>
            <p>
                Combining 7 years of hospitality work experience, an eternal drive for self-improvement, a rich array of
                outdoor interests and a vocation for development encapsulates exactly what makes me, me!
            </p>
            <small className="tw-mt-4 tw-inline-flex tw-items-end">
                <a
                    className="tw-green tw-mx-0.5 tw-inline-flex tw-items-end tw-gap-x-1 tw-p-0.5"
                    href="https://www.linkedin.com/in/sam-creasey-056b371b7"
                >
                    <FontAwesomeIcon size="2x" icon={faLinkedin} /> Hire me.
                </a>
                <span className="tw-p-0.5">If you liked this blurb, you'll love the book.</span>
            </small>
        </div>
    </div>
);
