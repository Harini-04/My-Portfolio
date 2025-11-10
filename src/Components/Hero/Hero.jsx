import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg"; 

function Hero() {
  const handleResume=()=>{
    window.open("https://drive.google.com/file/d/1xo3eGkFZvReRww6mEfdy2cFXDfdKegxt/view?usp=drive_link","_blank");
  };
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h4>Hello, I'm</h4>
        <h1>Harini Kurella</h1>
        <p>CSE 2024</p>
        <button className="my-work" onClick={()=>{
          const section=document.getElementById("work");
          section?.scrollIntoView({behavior:"smooth"});
        }}>My Work</button>
        <button className="resume-btn" onClick={handleResume}>My Resume</button>
        <div className="hero-icons">
        <a href="https://www.linkedin.com/in/harini-kurella-039201245/" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Harini-04" target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="GitHub" />
        </a>
        <a href="https://leetcode.com/Harini_kurella" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" />
        </a>
        </div>
      </div>
      
      <img src={profile} alt="profile" className="hero-img" />
    </section>
  );
}

export default Hero;
