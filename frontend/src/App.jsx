import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Project from "./components/Projects"
import About from "./components/About"

function App() {

  return (
    <>
      <Navbar/>;
      <Hero/>;
      <About/>;
      <Project/>;
    </>
  )
}

export default App
