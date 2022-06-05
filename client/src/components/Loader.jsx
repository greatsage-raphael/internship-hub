/* eslint-disable react/prop-types */
import React from "react";

const Loader = (props) => {
  return (
    <div className="svg-loader" ref={props.loaderRef}>
      <svg
        className="svg-container"
        height="100"
        width="100"
        viewBox="0 0 100 100"
      >
        <circle className="loader-svg bg" cx="50" cy="50" r="45"></circle>
        <circle className="loader-svg animate" cx="50" cy="50" r="45"></circle>
      </svg>
    </div>
  );
};

export default Loader;
