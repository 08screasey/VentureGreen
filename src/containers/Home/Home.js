import React, {useState, useEffect} from 'react';
import './Home.css';
import Image1 from '../../assets/Home/Home Image.jpg'
import Image2 from '../../assets/Home/Home Image 2.jpg'
import Image3 from '../../assets/Home/Home Image 3.jpg'
import Image4 from '../../assets/Home/Home Image 4.jpg';
import leftArrow from '../../assets/Home/leftarrow.png';
import Image5 from '../../assets/Home/Home Image 5.jpg'
import Website from "../../assets/Home/website.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLevelUpAlt, faLevelDownAlt} from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as LeftBrain} from '../../assets/Home/brainLeft.svg';
import LeftBrainOVerlay from '../../assets/Home/brainLeftOverLay.png';
import LeftText1 from '../../assets/Home/brainLeftText1.png';
import LeftText2 from '../../assets/Home/brainLeftText2.png';
import RightText1 from '../../assets/Home/brainRightText1.png';
import RightText2 from '../../assets/Home/brainRightText2.png';
import RightBrainOVerlay from '../../assets/Home/brainRightOverLay.png';
import {ReactComponent as RightBrain} from '../../assets/Home/brainRight.svg';
import {Waypoint} from "react-waypoint"; 

const Home = (props) => {
	useEffect(() => {
  window.scrollTo(0, 0)
}, [])
	const [photoView, setPhotoView] = useState(false);
	const [devView, setDevView] = useState(false)
	const content = [(<span className="Cyan">{"<"}</span>),(<span className="Red">a</span>),(<span className="Cyan">{">"}</span>),'D','e','v','e','l','o','p','m','e','n','t',(<span className="Cyan">{"<"}</span>),(<span className="Cyan">{"/"}</span>),(<span className="Red">a</span>),(<span className="Cyan">{">"}</span>)]
	const [devContent, setDevContent] = useState([])
	const startTyping = () => {
		if(devContent.length<1){
		content.forEach((el,i)=>{
			setTimeout(()=>{
			setDevContent(content.slice(0,i+1))
		}, 110*i+Math.floor(Math.random()*90))
		})}
		
	}

	return (<div className="Home pt-3">
	
		<h1 className="mx-auto pt-2 my-0 px-3 F-Code text-left" style={{fontSize:"25px",width:"90%", textShadow:"1px 1px #ccc", borderBottom:"1px solid #CCC"}}>Portfolio</h1>
		<div className="Flex" >
		<Waypoint onEnter={()=>{setDevView(true);
			startTyping()}} topOffset={"200px"} onLeave={()=>setDevView(false)}>
		<div className={"HomeDev"} onClick={()=>props.history.push("/development")}>
		<h2 className="F-Code" style={{color:"white"}}>{devContent.map(x=>x)} <span class="Typer"></span></h2>
		<div className="LaptopScreen">
		<div className="InnerScreen">
		<img src={Website} />
		</div>
		</div>

	</div>

		</Waypoint>
	<div className="HomeBreak" onClick={()=>props.history.push("/about-me")}>
	<div className="Brain d-flex justify-content-center mb-5" >
	<div className={devView ? "LeftBrain Active" : "LeftBrain"}>
	<img src={LeftBrainOVerlay} className="BrainOverlay"/>
	<img src={LeftText1} alt="" className="Text Text1"/>
	<img src={LeftText2} alt="" className="Text Text2"/>
	<FontAwesomeIcon icon={faLevelUpAlt} className="Arrow PaleGreen" />
	<LeftBrain />

	</div>
	
	<div className={photoView ? "RightBrain Active" : "RightBrain"}>
	<RightBrain />
		<img src={RightBrainOVerlay} className="BrainOverlay"/>
		<img src={RightText1} alt="" className="Text Text1"/>
		<img src={RightText2} alt="" className="Text Text2"/>
		<FontAwesomeIcon icon={faLevelUpAlt} className="Arrow Cyan" /> 
	</div>
</div>
	</div>
	<Waypoint onEnter={()=>setPhotoView(true)} onLeave={()=>setPhotoView(false)} topOffset={"650px"} bottomOffset={"500px"}>
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