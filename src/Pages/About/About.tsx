import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const About = () => (
    <div className="tw-flex tw-justify-around tw-items-center tw-flex-wrap tw-w-full tw-pb-15">
        <img
            src="/about/about.jpg"
            alt="Portrait image of me."
            className="tw-w-[60%] tw-max-w-[400px] tw-rounded-full tw-aspect-square"
        />
        <div className="tw-p-4 tw-w-full tw-max-w-[700px] tw-font-lora">
            <h2 className="tw-text-green tw-font-lora">Hi, I'm Sam!</h2>
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
            <small className="tw-inline-flex tw-items-end tw-mt-4">
                <a
                    className="tw-p-0.5 tw-mx-0.5 tw-inline-flex tw-gap-x-1 tw-green tw-items-end"
                    href="https://www.linkedin.com/in/sam-creasey-056b371b7"
                >
                    <FontAwesomeIcon size="2x" icon={faLinkedin} /> Hire me.
                </a>
                <span className="tw-p-0.5">If you liked this blurb, you'll love the book.</span>
            </small>
        </div>
    </div>
);
