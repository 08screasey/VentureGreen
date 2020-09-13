import React from 'react';
import './Development.css'
import DevCards from '../../components/Development/DevCards/DevCards';

const Development = (props) => {
	return (<div className="Development">
		<h1 className="F-Active PaleGreen">Web Development</h1>
		<div className="p-4">
		<p className="F-OldStandard">As a self taught programmer, the only thing I've had to drive me to this point is myself.</p>
		<p className="F-OldStandard mb-5">With a mathematical background, I have always excelled in problem solving. It was a revalation to discover that web development was a skill that would satisfy both sides of my brain.</p>
		</div>
		<DevCards />
</div>)
};

export default Development ;