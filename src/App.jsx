import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Work from "./Components/My Work/My Work.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
