import FloquoteLogo from '../../../assets/floquote-logo.svg';
import FrontifyLogo from '../../../assets/frontify-logo.svg';

import { DevCard } from './DevCard/DevCard';

export const DevCards = () => (
    <div className="tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-16">
        <DevCard
            header="Frontify"
            technologies={[
                'React',
                'Typescript',
                'JQuery',
                'TailwindCSS',
                'Node.js',
                'Docker',
                'PHP',
                'Cypress.io',
                'Vitest',
            ]}
            role="Senior Frontend Engineer"
            description="Brand Styleguide and Digital Asset Management tool."
            link="https://www.frontify.com/en/"
            color="#fff"
            logo={<FrontifyLogo className="tw-h-full tw-max-h-[100px] tw-w-full" />}
            altColor="#f3f3f3"
        />
        <DevCard
            header="FloQuote"
            technologies={['React', 'Javascript', 'Bootstrap', 'Node.js', 'PostgreSQL', 'Express', 'Cypress.io', 'AWS']}
            resources={['Twilio SDK', 'Chargebee']}
            role="Lead Frontend Engineer (Partly Fullstack)"
            description="Real-time messaging PWA for sending tailor-made quotes to clients using Whatsapp, Facebook, Viber, Signal and Email."
            link="https://app.myfloquote.com/"
            color="#fff"
            logo={<FloquoteLogo className="tw-h-full tw-max-h-[100px] tw-w-full" />}
            alt
            altColor="#f3f3f3"
        />
        <DevCard
            header="Columbia Valley Hut Society"
            resources={['Paypal Rest SDK', 'SendGrid']}
            technologies={['React', 'Javascript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Express']}
            description="This booking platform was built and designed for use by the Columbia Valley Hut Society, a Canadian volunteer-run organization responsible for several mountain cabins throughout the Columbia Mountain range of BC."
            github="https://github.com/08screasey/ColumbiaValleyHutSociety"
            link="https://columbiavalleyhutsociety.onrender.com/"
            images={[
                {
                    src: '/development/cvhsmobile.jpg',
                    width: 633,
                    height: 854,
                    alt: '',
                },
                {
                    src: '/development/cvhsmobile3.jpg',
                    width: 900,
                    height: 1206,
                    alt: '',
                },
                {
                    src: '/development/cvhsmobile2.jpg',
                    width: 492,
                    height: 750,
                    alt: '',
                },
            ]}
            color="#224146"
            altColor="hsl(207.5, 20.7%, 98.9%)"
        />
        <DevCard
            alt
            header="Recipe Analyser"
            description="A dynamic web application for parsing recipes from provided URL's. Built using the React framework, utilising firebase as an authentication and database platform."
            technologies={['React', 'Javascript', 'HTML', 'CSS', 'Firebase']}
            resources={['Spoonacular']}
            color="hsl(122, 20%, 60%)"
            altColor="hsl(207.5, 20.7%, 98.9%)"
            images={[
                {
                    src: '/development/recipe.jpg',
                    width: 492,
                    height: 750,
                    alt: '',
                },
                {
                    src: '/development/recipe3.jpg',
                    width: 900,
                    height: 1206,
                    alt: '',
                },
                {
                    src: '/development/recipe2.jpg',
                    width: 633,
                    height: 880,
                    alt: '',
                },
            ]}
            github="https://github.com/08screasey/Recipe-parser"
            link="https://react-recipe-project-87fc0.web.app/auth"
        />
        <DevCard
            header="Sprout Plant-Based Eatery"
            description="A dynamic website built for a local plant based restaurant. Built with an interface for owner to upload and delete events."
            technologies={['EJS', 'Javascript', 'CSS', 'MongoDB', 'Node.js', 'Express']}
            resources={['Cloudinary']}
            color="hsl(146, 39%, 74%)"
            altColor="hsl(207.5, 20.7%, 98.9%)"
            images={[
                {
                    src: '/development/sprout.jpg',
                    width: 492,
                    height: 750,
                    alt: '',
                },
                {
                    src: '/development/sprout2.jpg',
                    width: 900,
                    height: 674,
                    alt: '',
                },
                {
                    src: '/development/sprout3.jpg',
                    width: 840,
                    height: 923,
                    alt: '',
                },
            ]}
            github="https://github.com/08screasey/SproutWebsite"
            link="https://sproutwebsite.onrender.com"
        />
    </div>
);
