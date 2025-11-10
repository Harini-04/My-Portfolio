import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    { title: "Coffee Listing App", desc: "A modern coffee ordering web app that lets users browse, customize, and order their favorite brews effortlessly.", link: "https://github.com/Harini-04/Coffee-Listing" },
    // { title: "Comparison of Crime Hotspots", desc:"XYZ", link:"#"},
    { title: "Estimation in Earthquake Early Warning", desc:"Developed an earthquake early warning model to estimate seismic intensity and alert in real time.", link:"https://github.com/Harini-04/mini-project"},
    { title: "Crop Price Prediction", desc:"Implemented an ML-based solution for accurate crop price forecasting using historical and environmental data.", link:"https://github.com/Harini-04/Crop_Prediction"},
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
