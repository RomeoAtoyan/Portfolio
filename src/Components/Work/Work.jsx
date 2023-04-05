import React from "react";
import "./Work.css";

import "animate.css";
import CardWork from "./CardWork";

const Work = () => {
  return (
    <main className="work_container">
      <div className="development_work">
        <CardWork title="Development" />
        <div className="websites_iframes">
          {/* <Fade bottom> */}
            <iframe
              title="CineHub"
              width="500px"
              height="600px"
              src="https://cine-hub.vercel.app/"
              frameborder="0"
            ></iframe>
            <iframe
              title="DigiVerse"
              width="500px"
              height="600px"
              src="https://digi-verse.vercel.app/"
              frameborder="0"
            ></iframe>
          {/* </Fade> */}
        </div>
      </div>
    </main>
  );
};

export default Work;
