import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/skills"
import Experience from "./components/Experience"
import Project from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <Navbar/>;
      <Hero/>;
      <About/>;
      <Skill/>;
      <Experience/>;
      <Project/>;
      <Contact/>;
    </>
  )
}

export default App
