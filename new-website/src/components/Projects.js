import React from "react";
import "../stylesheets/Projects.css";

export const Projects = (props) => {

  return (
    <div className="projects">
      <p className="myProjects"> MY LATEST PROJECTS </p>
      {props.projects.map(proj => (
        <div className="project hvrbox" key={proj.id.toString}>
          <img className="img hvrbox-layer_bottom" src={proj.img} />
          <div className="hvrbox-layer_top hvrbox-layer_slidedown">
            <a className="link" href={proj.link} target="_blank">
              <div className="hvrbox-text">{proj.description}</div>
            </a>
          </div>
        </div>
      ))}
      <div className="projectLink">
        {" "}
        <a className="link" href="https://github.com/ledet20" target="_blank">
          {" "}
          VIEW MORE PROJECTS{" "}
        </a>{" "}
      </div>
    </div>
  );
};
