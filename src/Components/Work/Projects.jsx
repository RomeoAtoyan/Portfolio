import React from "react";

const Projects = ({ projectId, projectLink, projectTitle, projectSource }) => {
  return (
    <div className="link">
      <a id={projectId} href={projectLink}>
        {projectTitle}
      </a>
      <img src={projectSource} alt="" />
    </div>
  );
};

export default Projects;
