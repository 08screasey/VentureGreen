import React from 'react';
import './PhotoCard.css';


const PhotoCard = (props) => {

	const classes = ["PhotoCard", "F-Bodini"]
	classes.push(props.card);

	return (<div className={classes.join(" ")} onClick={()=>props.clicked(props.card)}>
	<p>
	{props.children}
	</p>
</div>)
};

export default PhotoCard ;