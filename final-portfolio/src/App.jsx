import React from "react"
import FirstPage from "./Components/FirstPage"
import ProjectPage from "./Components/ProjectPage"
import AboutPage from "./Components/AboutPage"
import ContactPage from "./Components/ContactPage"
import projects from "./data"

import dashboardImg from "./images/dashboard.png"
import webCrawlerImg from "./images/webCrawler.png"
import hangmanImg from "./images/hangman.png"
import quizzicalImg from "./images/quizzical.png"

export default function App() {
  const {project1 , project2, project3, project4} = projects
  return (
    <div className="App">
      <FirstPage />
      <ProjectPage 
        project1 = {project1} 
        project2 = {project2}
        image1 = {dashboardImg}
        image2 = {webCrawlerImg}  
      />
      <ProjectPage 
        project1 = {project3} 
        project2 = {project4}
        image1 = {hangmanImg}
        image2 = {quizzicalImg}  
      />
      <AboutPage />
      <ContactPage />
    </div>
  )
}

