import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg"; 

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Harini</h1>
        <p>A passionate Frontend Developer crafting beautiful web experiences.</p>
        <button>My Work</button>
      </div>
      <img src={profile} alt="profile" className="hero-img" />
    </section>
  );
}

export default Hero;
