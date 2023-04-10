import React from "react";
import "./Work.css";
import cinehub from "./CH.png";
import digiverse from "./digifavicon.ico";
import "animate.css";
import CardWork from "./CardWork";

const Work = () => {
  return (
    <main className="work_container">
      <CardWork title="Development" />
      <div className="websites_links">
        <div className="link">
          <a id="cinehub" href="https://cine-hub.vercel.app/">
            CineHub
          </a>
          <img src={cinehub} alt="" />
        </div>
        <div className="link">
          <a id="digiverse" href="https://digi-verse.vercel.app/">
            DigiVerse
          </a>
          <img src={digiverse} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Work;
