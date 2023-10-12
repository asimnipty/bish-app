import React from 'react'
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Extra from './components/Extra'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    
    <BrowserRouter>
    
      <Nav />
      <Home />
      <About />
      <Services />
      <Extra />
      <Footer />
    

    </BrowserRouter>
    
    
   
  )           
}

export default App