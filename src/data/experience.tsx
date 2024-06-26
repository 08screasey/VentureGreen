import { DevCardProps } from '../feature/Development/DevCards/DevCard/DevCard';
import FloquoteLogo from '../assets/floquote-logo.svg';
import FrontifyLogo from '../assets/frontify-logo.svg';

export const WORK_EXPERIENCE: DevCardProps[] = [
    {
        header: 'Frontify',
        technologies: [
            'React',
            'Typescript',
            'JQuery',
            'TailwindCSS',
            'Node.js',
            'Docker',
            'PHP',
            'Cypress.io',
            'Vitest',
        ],
        role: 'Senior Frontend Engineer',
        description: 'Brand Styleguide and Digital Asset Management tool.',
        achievement:
            'Spearheaded the release of multiple major features and the first to be WCAG compliant. Contributed to a large ecosystem of open-source projects.',
        link: 'https://www.frontify.com/en/',
        github: 'https://github.com/frontify',
        color: '#fff',
        logo: <FrontifyLogo className="tw-h-full tw-max-h-[100px] tw-w-full" />,
        altColor: '#fafafa',
    },
    {
        header: 'FloQuote',
        technologies: ['React', 'Javascript', 'Sass', 'Node.js', 'PostgreSQL', 'Cypress.io', 'AWS'],
        resources: ['Twilio SDK', 'Chargebee'],
        role: 'Lead Frontend Engineer',
        description:
            'Real-time messaging PWA for sending tailor-made quotes to clients using Whatsapp, Facebook, Viber, Signal and Email.',
        achievement: 'Architect of frontend codebase, including theming, accessibility and mobile app features.',
        link: 'https://app.myfloquote.com/',
        color: '#fff',
        logo: <FloquoteLogo className="tw-h-full tw-max-h-[100px] tw-w-full" />,
        alt: true,
        altColor: '#fafafa',
    },
];

export const PROJECT_EXPERIENCE: DevCardProps[] = [
    {
        header: 'Columbia Valley Hut Society',
        resources: ['Paypal Rest SDK', 'SendGrid'],
        technologies: ['React', 'Javascript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Express'],
        description:
            'Booking platform built and designed for use by the Columbia Valley Hut Society, a Canadian volunteer-run organization responsible for several mountain cabins throughout the Columbia Mountain range of BC.',
        github: 'https://github.com/08screasey/ColumbiaValleyHutSociety',
        link: 'https://columbiavalleyhutsociety.onrender.com/',
        images: [
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
        ],
        color: '#224146',
        altColor: 'hsl(207.5, 20.7%, 98.9%)',
    },
    {
        alt: true,
        header: 'Recipe Analyser',
        description:
            "Application for parsing recipes from provided URL's. Users can login, save, edit, search and delete recipes parsed from pasted url's",
        technologies: ['React', 'Javascript', 'HTML', 'CSS', 'Firebase'],
        resources: ['Spoonacular'],
        color: 'hsl(122, 20%, 60%)',
        altColor: 'hsl(207.5, 20.7%, 98.9%)',
        images: [
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
        ],
        github: 'https://github.com/08screasey/Recipe-parser',
        link: 'https://react-recipe-project-87fc0.web.app/auth',
    },
    {
        header: 'Sprout Plant-Based Eatery',
        description:
            'Splash page for local plant based restaurant. Built with an interface for owner to upload and delete events.',
        technologies: ['EJS', 'Javascript', 'CSS', 'MongoDB', 'Node.js', 'Express'],
        resources: ['Cloudinary'],
        color: 'hsl(146, 39%, 74%)',
        altColor: 'hsl(207.5, 20.7%, 98.9%)',
        images: [
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
        ],
        github: 'https://github.com/08screasey/SproutWebsite',
        link: 'https://sproutwebsite.onrender.com',
    },
];
