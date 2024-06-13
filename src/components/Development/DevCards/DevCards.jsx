import React from "react";
import "./DevCards.css";
import Cvhs2 from "../../../assets/Development/cvhsmobile3.jpg";
import Cvhs1 from "../../../assets/Development/cvhsmobile.jpg";
import Cvhs3 from "../../../assets/Development/cvhsmobile2.jpg";
import Recipe1 from "../../../assets/Development/recipe.jpg";
import Recipe3 from "../../../assets/Development/recipe2.jpg";
import Recipe2 from "../../../assets/Development/recipe3.jpg";
import Sprout1 from "../../../assets/Development/sprout.jpg";
import Sprout2 from "../../../assets/Development/sprout2.jpg";
import Sprout3 from "../../../assets/Development/sprout3.jpg";
import DevCard from "./DevCard/DevCard";

const DevCards = (props) => {
  return (
    <div className="DevCards">
      <DevCard
        header="Columbia Valley Hut Society"
        API={["Paypal Rest SDK", "SendGrid"]}
        technologies={[
          "React",
          "Javascript",
          "HTML",
          "CSS",
          "Node.js",
          "MongoDB",
          "Express",
        ]}
        description="This full-stack React web application was built and designed for use by the Columbia Valley Hut Society, a Canadian volunteer-run organization responsible for several mountain cabins throughout the Columbia Mountain range of BC."
        github="https://github.com/08screasey/ColumbiaValleyHutSociety"
        link="https://powerful-oasis-65796.herokuapp.com"
        images={[Cvhs1, Cvhs2, Cvhs3]}
        color="#224146"
        altColor="hsl(207.5, 20.7%, 98.9%)"
      />
      <DevCard
        alt
        header="Recipe Analyser"
        description="A dynamic web application for parsing recipes from provided URL's. Built using the React framework, utilising firebase as an authentication and database platform."
        technologies={["React", "Javascript", "HTML", "CSS", "Firebase"]}
        API={["Spoonacular"]}
        color="hsl(122, 20%, 60%)"
        altColor="white"
        images={[Recipe1, Recipe2, Recipe3]}
        github="https://github.com/08screasey/Recipe-parser"
        link="https://react-recipe-project-87fc0.web.app/auth"
      />
      <DevCard
        header="Sprout Plant-Based Eatery"
        description="A dynamic website built for a local plant based restaurant. Built with an interface for owner to upload and delete events."
        technologies={[
          "EJS",
          "Javascript",
          "CSS",
          "MongoDB",
          "Node.js",
          "Express",
        ]}
        API={["Cloudinary"]}
        color="hsl(146, 39%, 74%)"
        altColor="white"
        images={[Sprout1, Sprout2, Sprout3]}
        github="https://github.com/08screasey/SproutWebsite"
        link="https://limitless-fortress-00509.herokuapp.com/"
      />
    </div>
  );
};

export default DevCards;
