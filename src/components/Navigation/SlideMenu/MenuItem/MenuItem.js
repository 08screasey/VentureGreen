import React from 'react';
import './MenuItem.css';
import {NavLink} from 'react-router-dom';

const MenuItem = (props) => {
	return (<NavLink exact={props.exact} to={props.link} activeClassName="PaleGreen">
	<span className="F-Bodini" onClick={props.clicked}>{props.children}</span>
</NavLink>)
};

export default MenuItem ;