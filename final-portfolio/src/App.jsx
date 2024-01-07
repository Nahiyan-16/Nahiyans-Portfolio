import React from "react";
import FirstPage from "./Components/FirstPage";
import ProjectPage from "./Components/ProjectPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import projects from "./data";

export default function App() {
  const { project1, project2, project3, project4 } = projects;
  return (
    <div className="App">
      <FirstPage />
      <ProjectPage project1={project1} project2={project2} />
      <ProjectPage project1={project3} project2={project4} />
      <AboutPage />
      <ContactPage />
    </div>
  );
}
