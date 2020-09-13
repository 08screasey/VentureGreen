import React from 'react';
import './DevCards.css';
import Cvhs1 from '../../../assets/Development/cvhs1.jpg'
import Cvhs2 from '../../../assets/Development/cvhs2.jpg'
import Cvhs3 from '../../../assets/Development/cvhs3.jpg';
import Recipe1 from '../../../assets/Development/recipe.jpg';
import Recipe2 from '../../../assets/Development/recipe2.jpg';
import Recipe3 from '../../../assets/Development/recipe3.jpg';
import DevCard from "./DevCard/DevCard";

const DevCards = (props) => {
	return (<div className="DevCards">
		<DevCard header="Columbia Valley Hut Society"
				API={["Paypal Rest SDK", "SendGrid"]}
		technologies={["React", "Javascript", "HTML", "CSS", "Node.js", "MongoDB", "Express"]}
		description="This full-stack React web application was built and designed for use by the Columbia Valley Hut Society, a Canadian volunteer-run organization responsible for several mountain cabins throughout the Columbia Mountain range of BC."
		 github="https://github.com/08screasey/ColumbiaValleyHutSociety" link="https://powerful-oasis-65796.herokuapp.com"
		 images={[Cvhs1, Cvhs2, Cvhs3]}/>
		<DevCard alt header="Recipe Analyser" 	
		description="A dynamic web application for parsing recipes from provided URL's. Built using the React framework, utilising firebase as an authentication and database platform."
			technologies={["React", "Javascript", "HTML", "CSS", "Firebase"]}
		API={["Spoonacular"]}
		images={[Recipe1, Recipe2, Recipe3]}
 github="https://github.com/08screasey/Recipe-parser" link="https://react-recipe-project-87fc0.web.app/auth"/>
</div>)
};

export default DevCards ;