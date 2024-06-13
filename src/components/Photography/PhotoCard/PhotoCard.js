import React, { useState } from "react";
import "./PhotoCard.css";
import { Waypoint } from "react-waypoint";

const PhotoCard = (props) => {
  const [inView, setInView] = useState(false);

  const classes = ["PhotoCard", "F-Bodini"];
  classes.push(props.card);
  if (inView) {
    classes.push("Show");
  }

  return (
    <Waypoint
      onEnter={() => setInView(true)}
      onLeave={() => setInView(false)}
      bottomOffset={"500px"}
      topOffset="200px"
    >
      <div
        className={classes.join(" ")}
        onClick={() => props.clicked(props.card)}
      >
        <p>{props.children}</p>
      </div>
    </Waypoint>
  );
};

export default PhotoCard;
