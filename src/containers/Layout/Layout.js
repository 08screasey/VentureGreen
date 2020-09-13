import React, { useState } from "react";
import "./Layout.css";

import { Fade as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from '../../assets/venturegreen.png';
import SlideMenu from '../../components/Navigation/SlideMenu/SlideMenu';
import Navbar from "../../components/Navigation/Navbar/Navbar";

const Layout = (props) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div>
			<header>
				<div className="LogoDiv">
					<img src={Logo} className="Logo"/>
					<p className="F-Lora PaleGreen">Adventure Photography & Web Development</p>
				</div>
				<Navbar>
					<SlideMenu showMenu={isOpen} handleClick={()=>setOpen(false)}/>
					<div style={{zIndex:"1000"}}>
					<Hamburger toggled={isOpen} toggle={setOpen} size={20} />
					</div>
					<div className="IconWrapper">
					<FontAwesomeIcon icon={faInstagram} size="2x" />
					</div>
				</Navbar>{" "}
			</header>
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
