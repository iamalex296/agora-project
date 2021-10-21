import React from "react";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import Typography from "../../atoms/Typography/Typography";

import "./IconButton.scss";

const IconButton = ({ children, iconSrc, buttonText, iconClassName }) => {
  return (
    <Button>
      <Icon src={iconSrc} iconClassName={iconClassName} />
      <Typography>{buttonText || children}</Typography>
    </Button>
  );
};

export default IconButton;
