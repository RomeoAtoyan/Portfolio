import React from "react";
import "./Introduction.css";
import "animate.css";
import TypewriterComponent from "typewriter-effect";

const Introduction = () => {
  function scrollToComponent() {
    const WorkComponent = document.querySelector(".work_container");

    WorkComponent.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="introduction_container ">
      <div className="profile_pic animate__animated animate__fadeInDown"></div>
      <br />
      <span className="animate__animated animate__fadeInDown">
        Hi, I'm Romeo Atoyan
      </span>
      <h1 id="type" className="animate__animated animate__fadeInDown">
        <TypewriterComponent
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["Front End Developer"],
          }}
        />
      </h1>
      <h3 className="animate__animated animate__fadeInDown">
        Designing, developing, and maintaining websites and web applications
      </h3>
      <button
        onClick={scrollToComponent}
        className="animate__animated animate__fadeInDown"
      >
        My Work <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    </main>
  );
};

export default Introduction;
