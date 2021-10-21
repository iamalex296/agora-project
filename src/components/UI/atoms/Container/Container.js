import React from "react";

import "./Container.scss";

const Container = ({ children, containerClassName }) => {
  return (
    <div className="outside-container">
      <div className={`${"inside-container"} ${containerClassName || null}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
