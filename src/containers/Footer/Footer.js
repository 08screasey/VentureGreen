import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
	return(<div className="Footer w-100">
		<div className="Links d-flex m-auto h-100 justify-content-around align-items-center">
			<Link to="/development"  className="F-Bodini">Development</Link>
			<Link to="/photography"  className="F-Bodini">Photography</Link>
			<Link to="/about-me"  className="F-Bodini">About</Link>
			<Link to="/contact"  className="F-Bodini">Contact</Link>
		</div>
		</div>)
}

export default Footer;