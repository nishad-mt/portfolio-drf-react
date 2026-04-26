import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skill from "./components/skills"
import Experience from "./components/Experience"
import Project from "./components/Projects"
import About from "./components/About"

function App() {

  return (
    <>
      <Navbar/>;
      <Hero/>;
      <About/>;
      <Skill/>;
      <Experience/>;
      <Project/>;
    </>
  )
}

export default App
