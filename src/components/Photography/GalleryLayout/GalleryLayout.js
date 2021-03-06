import React, {useEffect} from 'react';
import './GalleryLayout.css';

const GalleryLayout = (props) => {
	useEffect(() => {
  window.scrollTo(0, 0)
}, [])
	return (<div className="Gallery">
		<h2 className="F-Bodini">{props.header}</h2>
<p className="F-OldStandard">{props.children}</p>
{props.images.map((image, i)=>{return(<img key={i} src={image} alt={image.toString()} onClick={()=>props.clicked(i)}/>)})}
</div>)
};

export default GalleryLayout ;