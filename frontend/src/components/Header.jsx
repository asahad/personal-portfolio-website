import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import AboutMe from "./AboutMe";

const Header = () => {
  return (
    <div className="App" id="header">
      <Navbar />
      <>
        <Cover id="cover" />
        <AboutMe />
        <SkillsSection id="skills" />
        <span id="projects">
          <ProjectsSection id="projects" />
        </span>
      </>
    </div>
  );
};

export default Header;
