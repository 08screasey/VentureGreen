import React, {useEffect} from 'react';

import './Development.css'
import DevCards from '../../components/Development/DevCards/DevCards';

const Development = (props) => {
	useEffect(() => {
  window.scrollTo(0, 0)
}, [])
	return (<div className="Development">
		<h1 className="F-Active PaleGreen">Web Development</h1>
		<div className="p-4 Code">
		<p className="F-Code">{"<"}<span style={{color:"red"}}>p</span>{">"} As a self taught programmer, the only thing I've had to drive me to this point is myself. {"</"}<span style={{color:"red"}}>p</span>{">"}</p>
		<p className="F-Code mb-3">{"<"}<span style={{color:"red"}}>p</span>{">"} With a mathematical background, I have always excelled in problem solving. It was a revalation to discover that web development was a skill that would satisfy both sides of my brain. {"</"}<span style={{color:"red"}}>p</span>{">"}</p>
		</div>
		<DevCards />
</div>)
};

export default Development ;