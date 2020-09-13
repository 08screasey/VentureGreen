import React, {useState} from 'react';
import './Home.css';
import Image1 from '../../assets/Home/Home Image.jpg'
import Image2 from '../../assets/Home/Home Image 2.jpg'
import Image3 from '../../assets/Home/Home Image 3.jpg'
import Image4 from '../../assets/Home/Home Image 4.jpg'
import Image5 from '../../assets/Home/Home Image 5.jpg'
import Laptop from "../../assets/Home/laptop.svg";
import Website from "../../assets/Home/website.jpg";
import {Waypoint} from "react-waypoint"; 

const Home = (props) => {
	const [devView, setDevView] = useState(false);
	const [photoView, setPhotoView] = useState(false);

	return (<div className="Home">
	<h1 className="F-Active Grey mb-5" >Please Select a Portfolio</h1>
		<div className="Flex">
		<Waypoint onEnter={()=>setDevView(true)}>
		<div className={devView ? "Active HomeDev":"HomeDev"} onClick={()=>props.history.push("/development")}>
		<h2 className="F-Active PaleGreen">Development</h2>
		<div className="LaptopScreen">
		<div className="InnerScreen">
		<img src={Website} />

		</div>
		</div>

	</div>

		</Waypoint>
	<div className="HomeBreak">
	</div>
	<Waypoint onEnter={()=>setPhotoView(true)} onExit={()=>setPhotoView(false)}>
	<div className={photoView ? "Active HomePhoto":"HomePhoto"} onClick={()=>props.history.push("/photography")}>
		<img src={Image1} />
		<img src={Image2} />
		<img src={Image3} />
		<img src={Image4} />
		<img src={Image5} />
	</div>
	</Waypoint>
	</div>
	</div>
	)
};

export default Home ;