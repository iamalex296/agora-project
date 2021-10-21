import React from "react";

import "./Icon.scss";

const Icon = (props) => {
  return (
    <img
      className={`${"icon"} ${
        props.iconClassName ? props.iconClassName : null
      }`}
      style={props.style ? props.style : null}
      src={props.src}
      alt={props.alt}
      onClick={props.onClickHandler}
    />
  );
};

export default Icon;
