import React from "react";
import "./GalleryView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const GalleryView = (props) => {
  return (
    <div className="GalleryView">
      <div className="BackDrop" onClick={props.exitGallery}></div>
      <img src={props.image} alt="" />
      <div className="Prev" onClick={props.prev}>
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </div>
      <div className="Next" onClick={props.next}>
        <FontAwesomeIcon icon={faAngleRight} size="3x" />
      </div>
    </div>
  );
};

export default GalleryView;
