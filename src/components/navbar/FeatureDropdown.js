import React from "react";

const FeatureDropdown = ({ icon, name }) => {
  return (
    <div>
      <img className="pr-2" src={icon}></img>
      <a> {name} </a>
    </div>
  );
};

export default FeatureDropdown;
