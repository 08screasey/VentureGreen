import React from "react";
import "./About.css";
import Sam from "../../assets/About/about.jpg";

const About = (props) => {
	return (
		<div className="About">
			<img src={Sam} />
			<div className="F-OldStandard AboutText">
				<h1 className="F-Active PaleGreen">
					Hi, I'm Sam and Welcome To My World!
				</h1>
				<p>
					What started as a desire to see something completely
					different to the little cozy town I grew up in developed in
					to a lifestyle. A way to explore new territories and with
					that, capture as much of the journey as I could.
				</p>

				<p>
					Along the way I realized how big a role our environment
					plays and how fragile it can be. I created this website to
					share my photography, and it led me down a path of finding
					the greenest way to see the world.{" "}
				</p>

				<p>
					I picked up a camera only 2 years ago and with support and
					encouragement it has become so much more than just a hobby.
					It will drag me out of bed at 5am or make me climb a
					mountain in the snow.
				</p>

				<p>
					{" "}
					The things that I have been lucky enough to see because of
					this are the things that I want the world to see, and to
					hopefully show that there is so much more to the world than
					the little town we grow up in. -Sam
				</p>
			</div>
		</div>
	);
};

export default About;
