import { DevCard } from './DevCard/DevCard';

export const DevCards = () => (
    <div className="tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-16">
        <DevCard
            header="Columbia Valley Hut Society"
            api={['Paypal Rest SDK', 'SendGrid']}
            technologies={['React', 'Javascript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Express']}
            description="This full-stack React web application was built and designed for use by the Columbia Valley Hut Society, a Canadian volunteer-run organization responsible for several mountain cabins throughout the Columbia Mountain range of BC."
            github="https://github.com/08screasey/ColumbiaValleyHutSociety"
            link="https://columbiavalleyhutsociety.onrender.com/"
            images={['/development/cvhsmobile.jpg', '/development/cvhsmobile3.jpg', '/development/cvhsmobile2.jpg']}
            color="#224146"
            altColor="hsl(207.5, 20.7%, 98.9%)"
        />
        <DevCard
            alt
            header="Recipe Analyser"
            description="A dynamic web application for parsing recipes from provided URL's. Built using the React framework, utilising firebase as an authentication and database platform."
            technologies={['React', 'Javascript', 'HTML', 'CSS', 'Firebase']}
            api={['Spoonacular']}
            color="hsl(122, 20%, 60%)"
            altColor="hsl(207.5, 20.7%, 98.9%)"
            images={['/development/recipe.jpg', '/development/recipe3.jpg', '/development/recipe2.jpg']}
            github="https://github.com/08screasey/Recipe-parser"
            link="https://react-recipe-project-87fc0.web.app/auth"
        />
        <DevCard
            header="Sprout Plant-Based Eatery"
            description="A dynamic website built for a local plant based restaurant. Built with an interface for owner to upload and delete events."
            technologies={['EJS', 'Javascript', 'CSS', 'MongoDB', 'Node.js', 'Express']}
            api={['Cloudinary']}
            color="hsl(146, 39%, 74%)"
            altColor="hsl(207.5, 20.7%, 98.9%)"
            images={['/development/sprout.jpg', '/development/sprout2.jpg', '/development/sprout3.jpg']}
            github="https://github.com/08screasey/SproutWebsite"
            link="https://sproutwebsite.onrender.com"
        />
    </div>
);
