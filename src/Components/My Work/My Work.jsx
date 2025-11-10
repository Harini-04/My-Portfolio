import React, { useState } from "react";
import "./My Work.css";

function Work() {
  const [activeTab, setActiveTab] = useState("internship");

  return (
    <div className="work-section" id="work">
      <h2 className="work-title">My Work</h2>

      <div className="work-tabs">
        <button
          className={activeTab === "internship" ? "active" : ""}
          onClick={() => setActiveTab("internship")}
        >
          Internship
        </button>

        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>

        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>

      <div className="work-content">
        {/* Internship */}
        {activeTab === "internship" && (
          <div className="tab">
            <h3>Salesforce Developer Intern</h3>
            <p>
              Completed Internship through <strong>SmartInternz</strong> where I
              worked on Salesforce CRM, Apex, Lightning components, and developed
              real-time CRM solutions.
            </p>
            <p>🗓️ Duration: 2 Months | 2023</p>
          </div>
        )}

        {/* Education */}
        {activeTab === "education" && (
          <div className="tab">
            <h3>B.Tech in Computer Science & Engineering</h3>
            <p>Malla Reddy Engineering College | 2020 - 2024</p>
            <p>CGPA: 7.4/10</p>
          </div>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <div className="tab skills-tab">
            <h3>Technical Skills</h3>
            <ul>
              <li><strong>Programming:</strong> Python, Javascript, SQL, React.js, Html, CSS, DSA, OOPS, ML, Django</li>
              <li><strong>Tools/Platforms:</strong>Git, GitHub, VS Code, Postman</li>
              <li><strong>Professional & Soft Skills:</strong> SDLC, Problem Solving, Quick Learning Ability</li>
              <li></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
