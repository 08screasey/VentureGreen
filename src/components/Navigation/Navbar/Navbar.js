import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
	return (<div className="Navbar">
		{props.children}
</div>)
};

export default Navbar ;