import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Project from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
