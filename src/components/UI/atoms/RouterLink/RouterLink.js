import React from "react";

import { Link } from "react-router-dom";
import "./RouterLink.scss";

const RouterLink = ({ children, linkClassName }) => {
  return (
    <Link className={`${"link"} ${linkClassName || null}`} to="#">
      {children}
    </Link>
  );
};

export default RouterLink;
