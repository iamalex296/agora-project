import React from "react";

import { CardWrapper } from "../../../atoms/CardWrapper/CardWrapper";
import Typography from "../../../atoms/Typography/Typography";
import LinearProgressBar from "../../../atoms/ProgressBars/LinearProgressBar/LinearProgressBar";

import "./SummeryCard.scss";

const SummaryCard = ({ description, amount, percentage }) => {
  return (
    <CardWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h3>Summery</h3>
        <div>
          <Typography>{description}</Typography>
          <h3>{amount}</h3>
          <LinearProgressBar percentage={29} progressBarColor="#40a9ff" />
        </div>
        <div>
          <Typography>{description}</Typography>
          <h3>{amount}</h3>
          <LinearProgressBar
            percentage={percentage}
            progressBarColor="#0050B3"
          />
        </div>
      </div>
    </CardWrapper>
  );
};

export default SummaryCard;
