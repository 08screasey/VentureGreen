import React, {useState} from 'react';
import PhotoCard from '../../components/Photography/PhotoCard/PhotoCard';
import './Photography.css';
import {LazyLoadComponent} from 'react-lazy-load-image-component';
import PhotoGrid from '../../components/Photography/PhotoGrid/PhotoGrid';
import {Route, Switch} from "react-router-dom"; 
import Animals from "../../components/Photography/Gallery/Animals/Animals";
import Asia from "../../components/Photography/Gallery/Asia/Asia";
import Canada from "../../components/Photography/Gallery/Canada/Canada";
import Oceania from "../../components/Photography/Gallery/Oceania/Oceania";
import Europe from "../../components/Photography/Gallery/Europe/Europe";
import CatMotors from "../../components/Photography/Gallery/CatMotors/CatMotors";
import Sprout from "../../components/Photography/Gallery/Sprout/Sprout";
import Luna from "../../components/Photography/Gallery/Luna/Luna";
import Climate from "../../components/Photography/Gallery/Climate/Climate";
import Gemma from "../../components/Photography/Gallery/Gemma/Gemma";
import Portrait from "../../components/Photography/Gallery/Portrait/Portrait";
import GalleryView from "../../components/Photography/GalleryView/GalleryView";

const Photography = (props) => {

	const [galleryView, setGalleryView] = useState(false);
	const [collection, setCollection] = useState([]);
	const [image, setImage] = useState(null);
	const [index, setIndex] = useState(0)

	const onCardSelect = (card) => {
		props.history.push(props.location.pathname +"/"+ card)
	}

	const openGallery = (img, col) => {
		console.log(img)
		setCollection(col);
		setImage(collection[img]);
		setIndex(img)
		console.log(collection, index)
		setGalleryView(true);
	};
		const closeGallery = () => {
		setGalleryView(false);
		setCollection([]);
		setImage(null);
		setIndex(0);
	};
		
	const moveGallery = (num) => {
		const newIndex = (index+num+collection.length)%collection.length;
		setIndex(newIndex);
		console.log(index);
		setImage(collection[index]);
	}


	console.log(props)
	return (<div className="Photography">
		{galleryView ? <GalleryView image={collection[index]} next={()=>moveGallery(+1)} prev={()=>moveGallery(-1)} exitGallery={closeGallery}/> : null}
		<Switch>
		<Route path="/photography/Travel/Asia" render={()=>{return  (<LazyLoadComponent><Asia imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Travel/Canada" render={()=>{return (<LazyLoadComponent><Canada imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Travel/Oceania" render={()=>{return (<LazyLoadComponent><Oceania imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)} }/>
		<Route path="/photography/Travel/Europe" render={()=>{return (<LazyLoadComponent><Europe imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Client/Cat-Motors" render={()=>{return (<LazyLoadComponent><CatMotors imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Client/Sprout" render={()=>{return (<LazyLoadComponent><Sprout imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Client/Luna" render={()=>{return (<LazyLoadComponent><Luna imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Client/Climate" render={()=>{return (<LazyLoadComponent><Climate imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Client/Gemma" render={()=>{return (<LazyLoadComponent><Gemma imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}}/>
		<Route path="/photography/Animal" render={()=>{return (<LazyLoadComponent><Animals imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Portrait" render={()=>{return (<LazyLoadComponent><Portrait imageSelect={(image, collection)=>openGallery(image, collection)}/></LazyLoadComponent>)}} />
		<Route path="/photography/Travel"  render={()=>{return(<PhotoGrid>
			<PhotoCard card="Asia" clicked={(card)=>onCardSelect(card)}>Asia</PhotoCard>
		<PhotoCard card="Canada" clicked={(card)=>onCardSelect(card)}>Canada</PhotoCard>
		<PhotoCard card="Oceania" clicked={(card)=>onCardSelect(card)}>Oceania</PhotoCard>
		<PhotoCard card="Europe" clicked={(card)=>onCardSelect(card)}>Europe</PhotoCard>
		</PhotoGrid>)}}/>
		<Route path="/photography/Client" render={()=>{return(<PhotoGrid>
			<PhotoCard card="Cat-Motors" clicked={(card)=>onCardSelect(card)}>Cat Motors</PhotoCard>
		<PhotoCard card="Sprout" clicked={(card)=>onCardSelect(card)}>Sprout</PhotoCard>
		<PhotoCard card="Luna" clicked={(card)=>onCardSelect(card)}>Luna & The Moon</PhotoCard>
		<PhotoCard card="Climate" clicked={(card)=>onCardSelect(card)}>Climate</PhotoCard>
		<PhotoCard card="Gemma" clicked={(card)=>onCardSelect(card)}>Gemma</PhotoCard>
		</PhotoGrid>)}}/>
		<Route path="/photography" render={()=>{return (<PhotoGrid>
			<PhotoCard card="Travel" clicked={(card)=>onCardSelect(card)}>Travel</PhotoCard>
		<PhotoCard card="Animal" clicked={(card)=>onCardSelect(card)}>Animal</PhotoCard>
		<PhotoCard card="Portrait" clicked={(card)=>onCardSelect(card)}>Portrait</PhotoCard>
		<PhotoCard card="Client" clicked={(card)=>onCardSelect(card)}>Client</PhotoCard>
		</PhotoGrid>)}} />
		</Switch>
</div>)
};

export default Photography ;