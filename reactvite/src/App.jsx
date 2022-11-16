import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Wwyg from './components/Wwyg'
import Client from './components/Client'
import Footer from './components/Footer'
import './App.css'


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <Wwyg/>
    <Client/>
    <Footer/>
    </>
    
  )
}

export default App