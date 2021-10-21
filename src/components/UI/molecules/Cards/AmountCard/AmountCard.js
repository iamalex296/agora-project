import React from "react";
import { CardWrapper } from "../../../atoms/CardWrapper/CardWrapper";
import Typography from "../../../atoms/Typography/Typography";

import "./AmountCard.scss";

const AmountCard = ({ amount, description }) => {
  return (
    <CardWrapper>
      <h1 className="amount">${amount}</h1>
      <Typography>{description}</Typography>
    </CardWrapper>
  );
};

export default AmountCard;
