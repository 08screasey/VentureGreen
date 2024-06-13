import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <NavLink
      exact={props.exact}
      to={props.link}
      onClick={props.clicked}
      activeClassName="PaleGreen"
    >
      <span className="F-Bodini">{props.children}</span>
    </NavLink>
  );
};

export default MenuItem;
