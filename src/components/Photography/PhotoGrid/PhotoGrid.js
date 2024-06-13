import React from "react";
import "./PhotoGrid.css";

const PhotoGrid = (props) => {
  return <div className="PhotoGrid">{props.children}</div>;
};

export default PhotoGrid;
