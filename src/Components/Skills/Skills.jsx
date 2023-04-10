import React from "react";
import "animate.css";
import Card from "./Card";
import photoshop from "./photoshop.png";
import figma from "./figma.png";
import premiere from "./premiere.png";
import aftereffects from "./aftereffects.png";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      {/* <Fade left reset> */}
      <aside className="web_skills_container">
        <Card
          icon="fa-solid fa-code fa-2x"
          title="Web Development"
          description="Bringing ideas to life using the latest technologies and programming principles"
        />
        <div className="frontend">
          <i class="fa-brands fa-html5 fa-8x" style={{ color: "#e54b21" }}></i>
          <i
            class="fa-brands fa-css3-alt fa-8x"
            style={{ color: "#2965f1" }}
          ></i>
          <i
            class="fa-brands fa-bootstrap fa-8x"
            style={{ color: "#563d7c" }}
          ></i>
          <i class="fa-brands fa-js fa-8x" style={{ color: "#f7e018" }}></i>
          <i class="fa-brands fa-react fa-8x" style={{ color: "#61dbfb" }}></i>
          <i class="fa-solid fa-feather fa-8x" style={{ color: "#53ab4d" }}></i>
          <i
            class="fa-brands github_skill fa-github fa-8x"
            style={{ color: "#000000" }}
          ></i>
        </div>
      </aside>
      {/* </Fade> */}
      {/* <Fade right> */}
      <aside className="ui_ux_skills_container">
        <Card
          icon="fa-solid fa-mobile-screen-button fa-2x"
          title="UI / UX"
          description="Visually appealing and functional websites that deliver an exceptional user experience that fits all devices"
        />
        <div className="skill_icons">
          <img src={photoshop} alt="" />
          <img src={figma} alt="" />
        </div>
      </aside>
      {/* </Fade> */}
      {/* <Fade left> */}
      <aside className="editing_skills_container">
        <Card
          icon="fa-solid fa-film fa-2x"
          title="Video Editing / VFX / 3D "
          description="Bringing stories to life. With expertise in various video editing software and techniques"
        />
        <div className="skill_icons">
          <img src={premiere} alt="" />
          <img src={aftereffects} alt="" />
        </div>
      </aside>
      {/* </Fade> */}
    </>
  );
};

export default Skills;
