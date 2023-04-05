import React from "react";
import Fade from "react-reveal/Fade";

const CardWork = ({ title }) => {
  return (
    <Fade top>
      <h1>{title}</h1>
    </Fade>
  );
};

export default CardWork;
