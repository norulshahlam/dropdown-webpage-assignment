import React from "react";

const FeatureDropdown = ({ icon, name }) => {
  return (
    <div>
      <img className="inline pr-2" alt="" src={icon}></img>
      <a>{name}</a>
    </div>
  );
};

export default FeatureDropdown;
