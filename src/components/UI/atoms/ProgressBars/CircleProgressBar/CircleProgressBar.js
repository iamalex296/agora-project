import React, { useState, useEffect } from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const config = {
  percent: 0,
  colorSlice: "#00a1ff",
  colorCircle: "#F5F5F5",
  fontColor: "#3B68EB",
  fontSize: "1.6rem",
  margin: "100px",
  size: 200,
  stroke: 10,
  strokeBottom: 10,
  speed: 60,
  cut: 0,
  rotation: -90,
  opacity: 10,
  fill: "transparent",
  unit: "%",
  textPosition: "0.35em",
  animationOff: false,
  inverse: false,
  round: false,
  number: true,
  linearGradient: ["#3B68EB", "#40A9FF", "#BAE7FF"],
};

const CircleProgressBar = ({ percent }) => {
  const [update, setUpdate] = useState(config);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate({
        ...config,
        id: 0,
        percent: percent,
      });
    }, 500);

    return () => clearInterval(interval);
  }, [percent]);

  const newObject = { ...config, ...update };

  return <CircularProgressBar {...newObject} />;
};

export default CircleProgressBar;
