import React from 'react';

import GalleryLayout from '../../GalleryLayout/GalleryLayout';
import europe1 from '../../../../assets/travel/europe/europe.jpg'
import europe2 from '../../../../assets/travel/europe/europe1.jpg'
import europe3 from '../../../../assets/travel/europe/europe2.jpg'
import europe4 from '../../../../assets/travel/europe/europe3.jpg'
import europe5 from '../../../../assets/travel/europe/europe4.jpg'
import europe6 from '../../../../assets/travel/europe/europe5.jpg'
import europe7 from '../../../../assets/travel/europe/europe6.jpg'
import europe8 from '../../../../assets/travel/europe/europe7.jpg'
import europe9 from '../../../../assets/travel/europe/europe8.jpg'
import europe10 from '../../../../assets/travel/europe/europe10.jpg'
import europe11 from '../../../../assets/travel/europe/europe11.jpg'
import europe12 from '../../../../assets/travel/europe/europe12.jpg'
import europe13 from '../../../../assets/travel/europe/europe13.jpg'
import europe14 from '../../../../assets/travel/europe/europe14.jpg'
import europe15 from '../../../../assets/travel/europe/europe15.jpg'
import europe16 from '../../../../assets/travel/europe/europe16.jpg'
import europe17 from '../../../../assets/travel/europe/europe17.jpg'
import europe18 from '../../../../assets/travel/europe/europe18.jpg'
import europe19 from '../../../../assets/travel/europe/europe19.jpg'
import europe20 from '../../../../assets/travel/europe/europe20.jpg'
import europe21 from '../../../../assets/travel/europe/europe21.jpg'
import europe22 from '../../../../assets/travel/europe/europe22.jpg'
import europe23 from '../../../../assets/travel/europe/europe23.jpg'
import europe24 from '../../../../assets/travel/europe/europe24.jpg'
import europe25 from '../../../../assets/travel/europe/europe25.jpg'
import europe26 from '../../../../assets/travel/europe/europe26.jpg'
import europe27 from '../../../../assets/travel/europe/europe27.jpg'
import europe28 from '../../../../assets/travel/europe/europe28.jpg'
const Europe = (props) => {
	const images = [europe1, europe2, europe3, europe4, europe5, europe6, europe7, europe8, europe9, europe10, europe11, europe12, europe13, europe14, europe15, europe16, europe17, europe18, europe19, europe20, europe21, europe22, europe23, europe24, europe25, europe26, europe27, europe28];
	return (
		<GalleryLayout clicked={(i)=>props.imageSelect(i,images)} images={images}></GalleryLayout>
		)
};

export default Europe ;