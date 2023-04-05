import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="technical">
      <i class={icon}></i>
      <br />
      <h3>{title}</h3>
      <br />
      <span>{description}</span>
    </div>
  );
};

export default Card;
