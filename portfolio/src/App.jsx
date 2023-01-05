import React from "react"
import FirstPage from "./Components/FirstPage"
import ProjectPage from "./Components/ProjectPage"
import AboutPage from "./Components/AboutPage"
import ContactPage from "./Components/ContactPage"

export default function App() {
  return (
    <div className="App">
      <FirstPage />
      <ProjectPage />
      <AboutPage />
      <ContactPage />
    </div>
  )
}

