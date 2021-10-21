import React from "react";

import "./CardWrapper.scss";

export const CardWrapper = ({ children, cardWrapperClass }) => {
  return (
    <div className={`${"card-wrapper-box"} ${cardWrapperClass || null}`}>
      {children}
    </div>
  );
};
