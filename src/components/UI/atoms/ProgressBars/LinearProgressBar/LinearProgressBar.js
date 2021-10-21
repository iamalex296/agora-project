import React, { useState } from "react";
import Typography from "../../Typography/Typography";

import "./LinearProgressBar.scss";

const LinearProgressBar = ({ percentage, progressBarColor }) => {
  const [progressBarStyle, setProgresBarStyle] = useState({ opacity: "0" });

  setTimeout(() => {
    const newProgressBarStyle = {
      opacity: 1,
      backgroundColor: progressBarColor,
      width: `${percentage}%`,
    };
    setProgresBarStyle(newProgressBarStyle);
  }, 100);

  return (
    <div className="progress">
      <div className="progress-done" style={progressBarStyle}>
        <Typography>{percentage}%</Typography>
      </div>
    </div>
  );
};

export default LinearProgressBar;
