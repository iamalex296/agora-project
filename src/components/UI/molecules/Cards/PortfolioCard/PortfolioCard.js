import React from "react";

import { CardWrapper } from "../../../atoms/CardWrapper/CardWrapper";
import Typography from "../../../atoms/Typography/Typography";
import CircleProgressBar from "../../../atoms/ProgressBars/CircleProgressBar/CircleProgressBar";

import "./PortfolioCard.scss";

const PortfolioCard = ({ percent }) => {
  return (
    <CardWrapper>
      <div className="card-box">
        <Typography>Portfolio Allocation</Typography>
        <CircleProgressBar percent={percent} />
      </div>
    </CardWrapper>
  );
};

export default PortfolioCard;
