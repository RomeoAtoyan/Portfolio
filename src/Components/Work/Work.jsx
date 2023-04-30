import React from "react";
import "./Work.css";
import cinehub from "./CH.png";
import digiverse from "./digifavicon.ico";
import universe from "./universe.png";
import best from "./best.png";
import "animate.css";
import CardWork from "./CardWork";
import ProjectsCard from "./Projects";

const Work = () => {
  return (
    <main className="work_container">
      <CardWork title="Development" />
      <div className="websites_links">
        <ProjectsCard
          projectId="cinehub"
          projectLink="https://cine-hub.vercel.app/"
          projectSource={cinehub}
          projectTitle="CineHub"
        />
        <ProjectsCard
          projectId="digiverse"
          projectLink="https://digi-verse.vercel.app/"
          projectSource={digiverse}
          projectTitle="DigiVerse"
        />
        <ProjectsCard
          projectId="universe"
          projectLink="https://universe-unleashed.vercel.app/"
          projectSource={universe}
          projectTitle="Universes Unleashed"
        />
        <ProjectsCard
          projectId="bestofcinema"
          projectLink="https://vue-movie-app-romeoatoyan.vercel.app/"
          projectSource={best}
          projectTitle="The Best of Cinema"
        />
      </div>
    </main>
  );
};

export default Work;
