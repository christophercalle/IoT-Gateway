import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faMap, faTachometerAlt, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";

let Icons = (props) => {
  return (
      <div className="icon-container">
        <FontAwesomeIcon id="icon" icon={faChartArea} />
        <FontAwesomeIcon id="icon" icon={faCircleNotch} />
        <FontAwesomeIcon id="icon" icon={faTachometerAlt} />
        <FontAwesomeIcon id="icon" icon={faMap} />
      </div>
  )
}

export default Icons;