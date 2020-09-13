import React, {useState} from "react";
import "./DevCard.css";
import {Container, Row, Col} from 'react-bootstrap';

import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DevCard = (props) => {
	const [preview, showPreview] = useState(false);
	return (<Container className="mb-2">
		<Row className="DevCard">
			<Col lg={{span:6, order:1}} xs={{span:12, order:1}} className="Square Flex">
				<h2 className="F-Active" style={{maxWidth:"280px"}}>{props.header}</h2>
			</Col>
			<Col lg={{span:6, order:2}} xs={{span:12, order:2}} className="Square Flex Info">
				<p className="F-Bodini Description">
					<strong>Description:</strong> {props.description}
				</p>
				<p className="F-Bodini Description">
					<strong>Technologies/Frameworks: </strong>
					{props.technologies.join(", ")}
				</p>
				<p className="F-Bodini Description">
					<strong>API's: </strong>
					{props.API.join(", ")}
				</p>
				<div className="Buttons">
					<a href={props.link} className="F-Active" target="_blank">
						<FontAwesomeIcon
							className="Green"
							icon={faLink}
							size="lg"
						/>{" "}
						Live Build{" "}
					</a>
					<a href={props.github} className="F-Active" target="_blank">
						<FontAwesomeIcon
							className="Green"
							icon={faGithubSquare}
							size="lg"
						/>{" "}
						Github Repo
					</a>
				</div>
			</Col>
			<Col lg={{span:12, order:3}} xs={{span:12, order:3}} className="Preview">
			<h2 className="F-Active PaleGreen" onClick={()=>{showPreview(!preview)}}>Previews <span><FontAwesomeIcon style={{transform: preview ? "rotateZ(180deg)": "rotateZ(0deg)", transition:"0.5s"}} icon={faCaretDown}/></span></h2>
			<div className=" d-flex ImagePreviews w-100" style={{maxHeight:preview ? "5000px" : "0px"}}>
			<Row>
			<Col md="4" sm="12">
			<img src={props.images[0]}/>
			</Col>
			<Col md="4" sm="12">
			<img src={props.images[1]}/>
			</Col>
			<Col md="4" sm="12">
			<img src={props.images[2]}/>
			</Col>
			</Row>
			</div>
			</Col>
		</Row>
		</Container>
	);
};

export default DevCard;
