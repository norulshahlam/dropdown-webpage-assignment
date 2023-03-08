import React from "react";

const FeatureDropdown = ({icon,name}) => {
  return (
    <div>
      <img src={icon}></img>
      <a> {name} </a>
    </div>
  );
};

export default FeatureDropdown;
