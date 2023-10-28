import React from 'react'
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Idea from './components/Idea'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    
    <BrowserRouter>
    
      <Nav />
      <Home />
      <Services />
      <Idea />
      <About />
      <Footer />
    </BrowserRouter>
    
    
   
  )           
}

export default App