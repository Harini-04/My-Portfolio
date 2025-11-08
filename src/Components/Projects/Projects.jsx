import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    { title: "Coffee Listing App", desc: "React project showcasing coffee details.", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
